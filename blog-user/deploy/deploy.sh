#!/bin/sh
yarn build --dotenv .env.development
# yarn nuxt generate --spa --dotenv .env.development
ssh root@115.71.238.146 "rm -rf ~/blog-front/blog-user/*"
scp -r .nuxt dist package.json server.js nuxt.config.js root@115.71.238.146:~/blog-front/blog-user/
ssh root@115.71.238.146 "cd ~/blog-front/blog-user && npm install && nohup npm run start-server > /logs/blog-front-user.log 2>&1 &"