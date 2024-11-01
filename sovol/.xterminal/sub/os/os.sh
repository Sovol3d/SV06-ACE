#!/bin/bash
info_os() {
    output_file="os.stats"
    os_type=""
    os_id=""
    os_version=""
    os_version_id=""
    os_pretty_name=""
    os_version_codename=""
    if [ -f /etc/os-release ]; then
        . /etc/os-release
        os_type=$NAME
        os_id=$ID
        os_version=$VERSION
        os_version_id=$VERSION_ID
        os_pretty_name=$PRETTY_NAME
        os_version_codename=$VERSION_CODENAME
    elif [ -f /etc/lsb-release ]; then
        . /etc/lsb-release
        os_type=$DISTRIB_ID
        os_version=$DISTRIB_RELEASE
        os_pretty_name=$DISTRIB_DESCRIPTION
        os_version_codename=$DISTRIB_CODENAME
    elif [ -f /etc/debian_version ]; then
        os_type="Debian"
    elif [ -f /etc/redhat-release ]; then
        os_type=$(awk '{print $1}' /etc/redhat-release)
    else
        os_type="unknown"
    fi
    cat > "$output_file" <<EOL
os:
  type: $os_type
EOL
    if [ -n "$os_id" ]; then
        echo "  id: $os_id" >> "$output_file"
    fi
    if [ -n "$os_version" ]; then
        echo "  version: $os_version" >> "$output_file"
    fi
    if [ -n "$os_version_id" ]; then
        echo "  versionId: $os_version_id" >> "$output_file"
    fi
    if [ -n "$os_pretty_name" ]; then
        echo "  prettyName: $os_pretty_name" >> "$output_file"
    fi
    if [ -n "$os_version_codename" ]; then
        echo "  versionCodename: $os_version_codename" >> "$output_file"
    fi
}
__main() {
    info_os
}
__main
