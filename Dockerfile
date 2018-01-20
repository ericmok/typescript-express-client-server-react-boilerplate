FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV production

# Install and cache dependencies
COPY ./package*.json /usr/src/app/
RUN npm install


# Adds app to /usr/src/app
ADD ./ /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]