#!/bin/bash
echo
GREEN='\033[0;32m'
NC='\033[0m' # No Color
printf "${GREEN}Building [Local] Server Environment${NC}"

docker compose -f compose-dev.yaml up