#!/bin/bash
#
# Assuming you have the latest version Docker installed, this script will
# fully create your environment.
#
set -e

docker pull node
docker-compose up -d --build

docker-compose ps
