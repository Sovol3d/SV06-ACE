#!/bin/bash
info_fsSize() {
    output_file="fs_size.stats"
    fs_data=$(df -x tmpfs -x devtmpfs -x overlay --output=source,fstype,size,avail,pcent,target | tail -n +2)
    echo "fsSize:" > "$output_file"
    while read -r fs type size available percent mount; do
        echo "    - fs: $fs
      type: $type
      size: $size
      available: $available
      percent: $percent
      mount: $mount" >> "$output_file"
    done <<< "$fs_data"
}
__main() {
    info_fsSize
}
__main
