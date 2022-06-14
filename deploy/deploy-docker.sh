#!/bin/sh
API_DOCKER_IMAGE=ghcr.io/yusunjo/blog-front/api
API_DOCKER_NAME=blog-front-api
ADMIN_DOCKER_IMAGE=ghcr.io/yusunjo/blog-front/admin
ADMIN_DOCKER_NAME=blog-front-admin

cat ~/deploy-front/GIT-TOKEN.txt | docker login ghcr.io -u yusunjo --password-stdin

docker stop $API_DOCKER_NAME && docker rm -fv hh-record && docker rmi -f $API_DOCKER_IMAGE:latest
docker run -d -p 3000:3000 --name $API_DOCKER_NAME --restart always $API_DOCKER_IMAGE:latest

docker stop $ADMIN_DOCKER_NAME && docker rm -fv hh-record && docker rmi -f $ADMIN_DOCKER_IMAGE:latest
docker run -d -p 3030:3030 --name $ADMIN_DOCKER_NAME --restart always $ADMIN_DOCKER_IMAGE:latest