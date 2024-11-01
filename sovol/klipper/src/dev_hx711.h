

#ifndef __dev_hx711_h
#define __dev_hx711_h


#include "autoconf.h" // CONFIG_MACH_AVR
#include "board/gpio.h" // gpio_out_write
#include "board/internal.h" // gpio_out_write
#include "board/irq.h" // irq_poll
#include "board/misc.h" // timer_read_time
#include "compiler.h"
#include "basecmd.h" // oid_alloc
#include "command.h" // DECL_COMMAND
#include "sched.h" // sched_add_timer
#include "trsync.h" // trsync_do_trigger
#include <stdint.h>
#include <stdlib.h>
#include <math.h>

struct hx71x_adc {
    struct timer timer;
    uint32_t rest_ticks;

    struct gpio_in dout; // pins used to receive data from the hx71x 0
    struct gpio_out sclk; // pins used to generate clock for the hx71x 0
    struct gpio_out single;

    uint8_t flags, data_count, overflow;
    uint16_t sequence;
    uint8_t data[52];
};

extern struct task_wake wake_hx71x;


#endif

