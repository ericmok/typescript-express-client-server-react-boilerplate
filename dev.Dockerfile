FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV NODE_ENV development

EXPOSE 3000
#CMD [ "npm", "start" ]
