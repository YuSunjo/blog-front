#!/bin/sh
yarn build --dotenv .env.development
# yarn nuxt generate --spa --dotenv .env.development
ssh root@115.71.238.146 "rm -rf ~/blog-front/blog-admin/*"
scp -r .nuxt dist package.json server.js nuxt.config.js root@115.71.238.146:~/blog-front/blog-admin/
ssh root@115.71.238.146 "cd ~/blog-front/blog-admin && npm install && nohup npm run start-server > /logs/blog-front-admin.log 2>&1 &"