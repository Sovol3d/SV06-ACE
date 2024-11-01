#!/bin/bash
info_time() {
    output_file="time.stats"
    timezone_offset=$(date +%z)
    timezone="GMT${timezone_offset:0:3}${timezone_offset:3:2}"
    export TZ=:/etc/localtime
    timezone_name=$(date +"%Z")
    timestamp=$(date +%s)
    uptime=$(cut -d " " -f 1 /proc/uptime)
    cat > "$output_file" <<EOL
time:
  timezone: "$timezone"
  timestamp: $timestamp
  uptime: "$uptime"
  timezoneName: "$timezone_name"
EOL
}
__main() {
    info_time
}
__main
