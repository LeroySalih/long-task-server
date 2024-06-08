#!/bin/bash

echo
GREEN='\033[0;32m'
RED='\033[0;32m'
NC='\033[0m' # No Color

echo
printf "${GREEN}Getting files from github${NC}"

git fetch
git reset --hard HEAD
git merge $CURRENT_BRANCH

echo
printf "${GREEN}Building Server Executables${NC}"

echo
echo "Killing existing images"
docker rm -vf $(docker ps -aq)
docker rmi -f $(docker images -aq)

echo
echo "Fetching Source Code at" `date`
git pull

echo
echo "Building Web Server - Debug Mode" 
cd ./web
# npm run build
cd ..


echo
echo "Building docker image for lts-web:latest"

docker build . -t lts-web:latest -f web/dockerfile
docker compose up