#!/bin/bash
# Create a build time
# ---------------------------

current_date_time="`date "+%Y-%m-%d %H:%M:%S"`";
echo $current_date_time > build-time.md;

git add .
git commit -m "Build at ${current_date_time}"
git push origin