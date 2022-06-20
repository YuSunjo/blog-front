#!/bin/sh
yarn build --dotenv .env.development
# yarn nuxt generate --spa --dotenv .env.development
#ssh root@115.71.238.146 "rm -rf ~/blog-front/blog-admin/*"
scp -r .nuxt dist package.json server.js nuxt.config.js root@115.71.238.146:~/blog-front/blog-user/
ssh root@115.71.238.146 "nohup npm run ~/blog-front/blog-admin/start-server > /logs/blog-front-admin.log 2>&1 &"