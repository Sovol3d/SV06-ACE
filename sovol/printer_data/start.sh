echo "Start makerbase-client"
# /root/io -4 0xff100028 0x010000
# echo 79 > /sys/class/gpio/export
# echo out > /sys/class/gpio/gpio79/direction
# chmod 777 /sys/class/gpio/gpio79/value
time=$(date "+%Y%m%d%H%M%S")
# /root/makerbase-client/build/MakerbaseClient localhost > /root/mksclient/test-$time.log
# sudo dpkg --configure -a
nohup sudo apt-get remove --purge libnewlib-arm-none-eabi -y &
nohup sudo apt remove --purge gcc-arm-none-eabi -y &

/home/sovol/printer_data/build/mksclient
