#!/bin/bash
info_memory() {
    output_file="memory.stats"
    mem_stats=$(cat /proc/meminfo)
    total_mem=$(awk '/^MemTotal:/ {print $2}' <<< "$mem_stats")
    free_mem=$(awk '/^MemFree:/ {print $2}' <<< "$mem_stats")
    buffcache_mem=$(awk '/^Buffers:/ {print $2}' <<< "$mem_stats")
    buffcache_mem=$((buffcache_mem + $(awk '/^Cached:/ {print $2}' <<< "$mem_stats")))
    used_mem=$((total_mem - free_mem - buffcache_mem))
    swap_total=$(awk '/^SwapTotal:/ {print $2}' <<< "$mem_stats")
    swap_free=$(awk '/^SwapFree:/ {print $2}' <<< "$mem_stats")
    swap_used=$((swap_total - swap_free))
    cat > "$output_file" <<EOL
memory:
  total: $total_mem
  free: $free_mem
  used: $used_mem
  buffcache: $buffcache_mem
  swapTotal: $swap_total
  swapUsed: $swap_used
  swapFree: $swap_free
EOL
}
__main() {
    info_memory
}
__main
