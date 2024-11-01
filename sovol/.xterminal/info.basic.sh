#!/bin/bash
output_file=~/.xterminal/output.basic.stats
info_os() {
    param="os"
    dir=~/.xterminal/sub/$param
    file=$dir/$param.sh
    cd "$dir" || exit
    chmod +x "$file"
    ./"$param.sh" >> "$output_file"
}
info_cpu() {
    if command -v lscpu >/dev/null 2>&1; then
        cpu_info=$(lscpu | awk -v OFS=": " '/^CPU\(s\)/{ cores = $2 }
                              /^Vendor ID/{ vendor = $3 }
                              /^Architecture/{ arch = $2 }
                              /^CPU MHz/{ frequency = $3 }
                              /^CPU family/{ family = $3 }
                              END {
                                  print "cpu:",
                                        "    cores", cores,
                                        "    arch", arch,
                                        "    vendor", vendor,
                                        "    frequency", frequency
                              }')
        echo "$cpu_info" >> "$output_file"
    else
        echo "no lscpu"
    fi
}
info_cpu_load() {
    load=$(uptime | awk -F', ' '{ print $NF }' | awk -F': ' '{ print $2 }')
    echo "cpu_load:" >> "$output_file"
    echo "    load: $load" >> "$output_file"
}
info_memory() {
    memory_info=$(free -m | awk 'NR == 2 { print "    total:", $2, "\n    used:", $3 }')
    echo "memory:" >> "$output_file"
    echo "$memory_info" >> "$output_file"
}
info_fs() {
    disk_info=$(df -h | awk '/^\/dev/ { print "    total:", $2, "\n    used:", $3, "\n    percent:", $5 }')
    echo "fs:" >> "$output_file"
    echo "$disk_info" >> "$output_file"
}
info() {
    info_os
    info_cpu
    info_cpu_load
    info_memory
    info_fs
}
__main() {
    > "$output_file"  # 清空输出文件
    info
}
__main
