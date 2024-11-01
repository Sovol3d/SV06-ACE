#!/bin/bash
iostat_fsStats_info() {
    output_file="fs_stats.stats"
    export S_TIME_FORMAT=ISO
    fs_stat_info=$(iostat -d --human | tail -n +4)
    echo "fsStats:" > "$output_file"
    while read -r name tps rps wps read_kb write_kb; do
        if [[ $name =~ ^[hsv]d[a-z]$ ]]; then
            cat >> $output_file <<EOL
    - device: ${name}
      rxPerSec: ${rps}
      wxPerSec: ${wps}
      source: iostat
EOL
        fi
    done <<< "$fs_stat_info"
    unset S_TIME_FORMAT
}
gua_fsStats_info() {
    output_file="fs_stats.stats"
    tmp_data_file=~/.xterminal/fs_stats.tmp
    if [[ -f $tmp_data_file ]]; then
        read -r prev_time prev_stats < "$tmp_data_file"
    fi
    curr_time=$(date +%s)
    curr_stats=$(cat /proc/diskstats | awk '$3~/^[hsv]d[a-z]$/{print $3,$6,$10}')
    if [[ -n $prev_stats ]]; then
        echo "$curr_time $curr_stats" > "$tmp_data_file"
        prev_stats=($prev_stats)
        curr_stats=($curr_stats)
        interval=$((curr_time - prev_time))
        dev_name=${prev_stats[0]}
        prev_reads=${prev_stats[1]}
        prev_writes=${prev_stats[2]}
        curr_reads=${curr_stats[1]}
        curr_writes=${curr_stats[2]}
        sector_size=$(cat /sys/block/$dev_name/queue/hw_sector_size)
        rxPerSec=$(( ((curr_reads - prev_reads) * sector_size) / (interval) ))
        wxPerSec=$(( ((curr_writes - prev_writes) * sector_size) / (interval) ))
        fs_stats="$dev_name $rxPerSec $wxPerSec"
        echo "fsStats:" > "$output_file"
        while read -r dev_name rxPerSec wxPerSec; do
            echo "  - device: $dev_name" >> "$output_file"
            echo "    rxPerSec: $rxPerSec" >> "$output_file"
            echo "    wxPerSec: $wxPerSec" >> "$output_file"
            echo "    source: gua" >> "$output_file"
        done <<< "$fs_stats"
    else
        echo "$curr_time $curr_stats" > "$tmp_data_file"
        echo "fsStats:" > "$output_file"
        while read -r dev_name rx_bytes wx_bytes; do
            echo "  - device: $dev_name" >> "$output_file"
            echo "    rxPerSec: 0" >> "$output_file"
            echo "    wxPerSec: 0" >> "$output_file"
            echo "    source: gua" >> "$output_file"
        done <<< "$curr_stats"
    fi
}
__main() {
    gua_fsStats_info
}
__main
