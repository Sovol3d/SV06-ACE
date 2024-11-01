#!/bin/bash
info_network_stats() {
    output_file="network_stats.stats"
    network_dir="/sys/class/net"
    stats_file=~/.xterminal/network_stats_total
    current_time=$(date +%s)
    total_rx_bytes_previous=0
    total_tx_bytes_previous=0
    total_rx_bytes_current=0
    total_tx_bytes_current=0
    excluded_interfaces=("lo" "docker0" "veth")
    for interface in "${network_dir}"/*; do
        interface=${interface##*/}
        if [[ ! " ${excluded_interfaces[@]} " =~ " ${interface} " ]]; then
            rx_bytes=$(cat "${network_dir}/${interface}/statistics/rx_bytes")
            tx_bytes=$(cat "${network_dir}/${interface}/statistics/tx_bytes")
            total_rx_bytes_current=$((total_rx_bytes_current + rx_bytes))
            total_tx_bytes_current=$((total_tx_bytes_current + tx_bytes))
        fi
    done
    if [ -f "$stats_file" ]; then
        read prev_time total_rx_bytes_previous total_tx_bytes_previous < "$stats_file"
        interval=$((current_time - prev_time))
        rx_bytes_per_sec=$(( (total_rx_bytes_current - total_rx_bytes_previous) / interval ))
        tx_bytes_per_sec=$(( (total_tx_bytes_current - total_tx_bytes_previous) / interval ))
        rx_bytes_delta=$(( total_rx_bytes_current - total_rx_bytes_previous ))
        tx_bytes_delta=$(( total_tx_bytes_current - total_tx_bytes_previous ))
    else
        rx_bytes_per_sec=0
        tx_bytes_per_sec=0
        rx_bytes_delta=0
        tx_bytes_delta=0
    fi
    echo "${current_time} ${total_rx_bytes_current} ${total_tx_bytes_current}" > "$stats_file"
    cat > "$output_file" <<EOL
networkStat:
  rxBytes: $rx_bytes_delta
  txBytes: $tx_bytes_delta
  rxBytesPerSec: $rx_bytes_per_sec
  txBytesPerSec: $tx_bytes_per_sec
EOL
}
__main() {
    info_network_stats
}
__main
