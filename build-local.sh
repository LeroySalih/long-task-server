#!/bin/bash
# Create a build time
# ---------------------------

current_date_time="`date "+%Y-%m-%d %H:%M:%S"`";
echo $current_date_time > build-time.md;

cd web
npm run build
cd ..

git add .
git commit -m "Build at ${current_date_time}"
git push origin

#copy the .env files
scp ".env.*.sh" root@139.59.70.63:/home/long-task-server/

