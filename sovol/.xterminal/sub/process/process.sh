#!/bin/bash
info_process() {
    export LC_ALL=C
    output_file="process.stats"
    PS_OUTPUT=$(ps -axo pid:11,pcpu:6,rss:11,command)
    TOTAL=$(echo "$PS_OUTPUT" | wc -l)
    RUNNING=$(echo "$PS_OUTPUT" | grep -c " R ")
    BLOCKED=$(echo "$PS_OUTPUT" | grep -c " D ")
    SLEEPING=$(echo "$PS_OUTPUT" | grep -c " S ")
    TOP_PROCESSES_CPU=$(echo "$PS_OUTPUT" | sort -r -k2 | head -n 6 | tail -5)
    TOP_PROCESSES_MEMORY=$(echo "$PS_OUTPUT" | sort -r -k3 | head -n 6 | tail -5)
    echo "process:" > "$output_file"
    cat <<EOF >> $output_file
    all: $TOTAL
    running: $RUNNING
    blocked: $BLOCKED
    sleeping: $SLEEPING
    topsCostCpu:
$(echo "$TOP_PROCESSES_CPU" | awk '{printf "        - cpu: %.1f%%\n          pid: %s\n          memory: %s\n          command: \"%s\"\n", $2, $1, $3, $4}')
    topsCostMemory:
$(echo "$TOP_PROCESSES_MEMORY" | awk '{printf "        - cpu: %.1f%%\n          pid: %s\n          memory: %s\n          command: \"%s\"\n", $2, $1, $3, $4}')
EOF
    unset LC_ALL
}
__main() {
    info_process
}
__main
