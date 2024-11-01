// Support for bit-banging commands to HX711 and HX717 ADC chips
//
// Copyright (C) 2024 Makerbase@Wangchong
//
// This file may be distributed under the terms of the GNU GPLv3 license.

#include "autoconf.h" // CONFIG_MACH_AVR
#include "board/gpio.h" // gpio_out_write
#include "board/internal.h" // gpio_out_write
#include "board/irq.h" // irq_poll
#include "board/misc.h" // timer_read_time
#include "basecmd.h" // oid_alloc
#include "command.h" // DECL_COMMAND
#include "sched.h" // sched_add_timer
#include <stdint.h>
#include <stdlib.h>
#include <math.h>
#include "dev_hx711.h"

extern void command_config_hx71x(uint32_t *args);
DECL_COMMAND(command_config_hx71x, "config_hx71x oid=%c dout_pin=%u sclk_pin=%c single_pin=%c diff_0=%u diff_1=%u diff_2=%u diff_3=%u");


extern void command_hx711_read(uint32_t * args);
DECL_COMMAND(command_hx711_read, "query_hx711_read oid=%c reg=%u read_len=%u");

extern void command_query_hx711_diff_read(uint32_t *args);
DECL_COMMAND(command_query_hx711_diff_read,
             "query_hx711_target oid=%c");

extern void command_hx711_status_set(uint32_t * args);
DECL_COMMAND(command_hx711_status_set, "query_hx711_start oid=%c status=%u");

extern void command_query_hx711_zero(uint32_t *args);
DECL_COMMAND(command_query_hx711_zero,
             "query_hx711_zero oid=%c");

extern void command_query_hx711_status(uint32_t *args);
DECL_COMMAND(command_query_hx711_status,
             "query_hx711_status oid=%c");

extern void hx71x_capture_task(void);
DECL_TASK(hx71x_capture_task);

