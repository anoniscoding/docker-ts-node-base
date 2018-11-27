#!/bin/bash

# This script will start a single "disposable" instance and connect the caller to it.
# The instance will link to all infrastructure, including the service containers (if it exists)
IMAGE_NAME="nodeproject_web_api"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT="$(dirname "${SCRIPT_DIR}")"

echo " ----- Starting Up Infrastructure Containers -----"
docker-compose -p nodeproject up -d

echo " ----- Using .env File from [${ROOT}] -----"
echo " ----- Starting Disposable Docker Container -----"

# Now, depending on whether our services are running or not, link them into our disposable container.
# NB: This file is hardcoded based on settings in the composer files and the env file.

echo " ----- Run Web application Disposable Container -----"
echo ${ROOT}/.env
docker run \
    -i \
    -t \
    -p 3000 \
    -v ${ROOT}:/project \
    --env-file=${ROOT}/.env \
    --network=nodeproject_main_network \
    ${IMAGE_NAME} \
    sh -c "npm install && bash"


echo " ----- EXITED from disposable container -----"
echo " ----- Removing Exited Containers. -----"

# Now grep through all containers and stop those that have been "exited". Only do that for our service.
docker ps -a | grep Exited | awk '{ print $1,$2 }' | \
grep ${IMAGE_NAME} |  awk '{print $1 }' | xargs -I {} docker rm {}
