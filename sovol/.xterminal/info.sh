#!/bin/bash
__main() {
    last_update_file=~/.xterminal/last_update
    if [[ -f $last_update_file ]]; then
        last_update=$(cat $last_update_file)
        now=$(date +%s)
        if [[ $((now - last_update)) -lt 2 ]]; then
            exit
        fi
    fi
    output_file=~/.xterminal/$(date +%s%N).stats
    for param in "$@"
    do
        dir=~/.xterminal/sub/$param
        file=$dir/$param.sh
        cd "$dir" || exit
        chmod +x "$file"
        ./"$param".sh
        cat "$dir/$param".stats >> "$output_file"
    done
    mv "$output_file" ~/.xterminal/output.stats
    echo $(date +%s) > $last_update_file
}
__main "$@"
