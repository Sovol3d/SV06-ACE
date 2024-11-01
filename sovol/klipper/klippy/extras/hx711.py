# HX711
#
# Copyright (C) @makerbase wangchong
#
# This file may be distributed under the terms of the GNU GPLv3 license.

# README：
# DEBUG_FUN: WEIGHTING_DEBUG_QUERY  

import collections ,os
import logging, struct
from . import bus, bulk_sensor
#
# Constants
#
BYTES_PER_SAMPLE = 4  # samples are 4 byte wide unsigned integers
MAX_SAMPLES_PER_BLOCK = 52 // BYTES_PER_SAMPLE # bulk_sensor.MAX_BULK_MSG_SIZE // BYTES_PER_SAMPLE
UPDATE_INTERVAL = 0.10
MAX_CHIPS = 1
MAX_BULK_MSG_SIZE = 4

class HX711Command:
    def __init__(self, config, chip):
        self.chip = chip
        self.config = config
        self.printer = config.get_printer()
        self.register_commands()
        self.last_val = 0
        
    def register_commands(self):
        gcode = self.printer.lookup_object('gcode')
        gcode.register_command("WEIGHTING_DEBUG_QUERY",self.cmd_WEIGHTING_DEBUG_QUERY,
                               desc=self.cmd_WEIGHTING_DEBUG_QUERY_help)
        gcode.register_command("WEIGHTING_START_QUERY",self.cmd_WEIGHTING_START_QUERY,
                               desc=self.cmd_WEIGHTING_DEBUG_QUERY_help)
        gcode.register_command("WEIGHTING_END_QUERY",self.cmd_WEIGHTING_END_QUERY,
                               desc=self.cmd_WEIGHTING_END_QUERY_help)
        gcode.register_command("WEIGHT_TARGET",self.cmd_WEIGHT_TARGET,
                               desc=self.cmd_WEIGHTING_DEBUG_QUERY_help)

    def cmd_WEIGHT_TARGET(self, gcmd):
        cb = self.chip.query_hx711_status.send([self.chip.oid])
        status = cb['status']
        gcmd.respond_info("HX711_status:%d" % status)
        
    def cmd_WEIGHTING_DEBUG_QUERY(self, gcmd):
        ####################################################
        # Sensitivity(灵敏度): 0.9mV/V ± 0.2mV
        # Excitation_voltage(激励电压): 5V
        # Range(量程) = Sensitivity * Excitation_voltage = 4.5mV
        # senser_rang(重量) = 10KG
        # 实际测量：1.5mV
        # 读取测量：2.0mV
        ####################################################
        cb = self.chip.query_hx711_read_data.send([self.chip.oid, 0, 0])

        Lv_Bo = 0.02  # 滤波系数 小于1

        # Get HX711 ADC value.
        d = cb['data']

        hx711_data = (d[0] & 0xff) | (d[1] & 0xff) << 8 | (d[2] & 0xff) << 16 | (d[3] & 0xff) << 24 

        hx711_data_out = hx711_data

        if hx711_data_out < 100:
            gcmd.respond_info("HX711_Info:Data error!")
        else:
            weight_mg = hx711_data_out * (0.5 * 4.28 / 128) / (8388607)
            gcmd.respond_info("HX711_Info: %d/0x%x(origin) / %.6f(ENOB)" % (hx711_data_out, hx711_data_out, weight_mg))

    cmd_WEIGHTING_DEBUG_QUERY_help = "Obtain HX711 measurement values"

    def cmd_WEIGHTING_START_QUERY(self, gcmd):
        self.chip.start_hx711(1)
        gcmd.respond_info("hx711 test start!")

    def cmd_WEIGHTING_END_QUERY(self, gcmd):
        self.chip.start_hx711(0)
        gcmd.respond_info("hx711 test end!")
    cmd_WEIGHTING_END_QUERY_help = "HX711 end query!"

class HX711:
    def __init__(self, config, allocate_endstop_oid=False):
        self.printer = config.get_printer()
        self.config = config
        HX711Command(config, self)
        self.name = config.get_name().split()[-1]

        self.query_hx71x_cmd = None
        self.reset_hx71x_cmd = None
        self.query_hx711_start_cmd = None
        self.query_hx711_status = None

        dout_pin = config.get('dout_pin')
        sclk_pin = config.get('sclk_pin')
        s_pin = config.get('single_pin')
        self.diff = config.getfloat('hx711_diff')
        temp = int(float(self.diff) * 16777215 / 4.95)
        self.t_diff = temp & 0xFFFFFFFF
        
        logging.info(f"设置的值为 %x" % self.t_diff)

        self.byte_array = self.t_diff.to_bytes(4, 'big')
        self.diff_0 = (self.t_diff >> 24) & 0xff
        self.diff_1 = (self.t_diff >> 16) & 0xff
        self.diff_2 = (self.t_diff >> 8) & 0xff
        self.diff_3 = (self.t_diff) & 0xff
        self.byte_list = [(self.t_diff >> 24) & 0xff, (self.t_diff >> 16) & 0xff, (self.t_diff >> 8) & 0xff, (self.t_diff) & 0xff]
        # self.byte_array = self.t_diff 
        logging.info("MKS_DEBUG:%s" % self.diff)
        logging.info("MKS_DEBUG:%s" % self.byte_list)

        ppins = self.printer.lookup_object('pins')

        self.dout_params = ppins.lookup_pin(dout_pin)
        self.sck_params = ppins.lookup_pin(sclk_pin)
        self.s_params =  ppins.lookup_pin(s_pin)

        self.mcu = self.dout_params['chip']
        logging.info("MKS_DEBUG2:%s" % self.mcu)

        self.oid = self.mcu.create_oid()
        logging.info("MKS_DEBUG OID:%s" % self.oid)

        self.lce_oid = 0
        if allocate_endstop_oid:
            self.lce_oid = self.mcu.create_oid()

        # Samples per second choices
        self.sps = config.getchoice('sample_rate', {80: 80, 10: 10},
                                    default=80)
        
        # set rest_ticks as a % of the sample_rate
        self.duty_cycle = config.getfloat('duty_cycle',
                                          minval=0.1, maxval=1.0, default=0.7)
        
        ## Command Configuration
        self.mcu.register_config_callback(self._build_config)

        ## Measurement conversion
        self.bytes_per_block = BYTES_PER_SAMPLE * 1
        self.blocks_per_msg = (bulk_sensor.MAX_BULK_MSG_SIZE
                               // self.bytes_per_block)
        
        # 注册消息队列
        self.bulk_queue = bulk_sensor.BulkDataQueue(self.mcu, "hx711_data", self.oid)

    def _build_config(self):

        # 配置MCU引脚
        self.mcu.add_config_cmd("config_hx71x oid=%d dout_pin=%s sclk_pin=%s single_pin=%s diff_0=%u diff_1=%u diff_2=%u diff_3=%u" 
            % (self.oid, self.dout_params['pin'], self.sck_params['pin'], self.s_params['pin'], self.diff_0, self.diff_1, self.diff_2, self.diff_3))
        
        # 注册消息队列
        self.query_hx711_read_data = \
            self.mcu.lookup_query_command("query_hx711_read oid=%c reg=%u read_len=%u", 
                                            "query_hx711_data oid=%c data=%*s",
                                            self.oid) 
        
        self.query_hx711_start_cmd = \
            self.mcu.lookup_query_command("query_hx711_start oid=%c status=%u", 
                                            "status_hx711 oid=%c status=%u",
                                            self.oid) 
        self.query_hx711_status = \
            self.mcu.lookup_query_command("query_hx711_status oid=%c", 
                                            "query_hx711_status_read oid=%c status=%u",
                                            self.oid) 
                
        self.query_hx711_zero_cmd = \
            self.mcu.lookup_query_command("query_hx711_zero oid=%c", 
                                            "query_hx711_zero_read oid=%c",
                                            self.oid) 

    # 启动HX711
    def start_hx711(self, status):
        params = self.query_hx711_start_cmd.send([self.oid, status])
        logging.info("MKS_DEBUG hx711_run status:%s" % params['status'])
        self.zero_set()

    def read_status(self):
        cb = self.query_hx711_status.send([self.oid])
        status = cb['status']
    
    # 清零操作
    def zero_set(self):
        self.query_hx711_zero_cmd.send([self.oid])
    
        
    def get_mcu(self):
        return self.mcu
def extern_use_start(status, config):
    target = HX711(config, allocate_endstop_oid=False)
    target.start_hx711(status)

def load_config(config):
    return HX711(config, allocate_endstop_oid=False)