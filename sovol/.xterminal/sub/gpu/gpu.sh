#!/bin/bash
info_gpu() {
    output_file="gpu.stats"
    if ! command -v nvidia-smi &> /dev/null; then
        echo > "$output_file"
        exit 0
    fi
    IFS=$'\n' read -d '' -ra gpu_info < <(nvidia-smi --query-gpu=name,memory.used,memory.total,utilization.gpu,power.draw,temperature.gpu --format=csv,noheader)
    yaml_output="gpu:
"
    for gpu in "${gpu_info[@]}"; do
        IFS=',' read -r name memory_used memory_total utilization power_draw temperature <<< "$gpu"
        yaml_output+="  - name: $name
    memoryUsed: $memory_used
    memoryTotal: $memory_total
    utilization: $utilization
    powerDraw: $power_draw
    temperature: $temperature
"
    done
    cat > "$output_file" <<EOL
$yaml_output
EOL
}
__main() {
    info_gpu
}
__main
