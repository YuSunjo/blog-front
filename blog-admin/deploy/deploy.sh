#!/bin/sh
yarn build --spa --dotenv .env.development
yarn nuxt generate --spa --dotenv .env.development
ssh root@115.71.238.146 "rm -rf ~/blog-front/blog-admin/*"
scp -r dist/* root@115.71.238.146:~/blog-front/blog-admin/