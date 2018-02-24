#FROM node:boron
FROM node:latest
LABEL maintainer="pablohn6@gmail.com"
WORKDIR /home/node/tuber
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV=production 
EXPOSE 8080
COPY . .
RUN npm install
#CMD [ "npm", "start" ]
CMD ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --host 0.0.0.0
