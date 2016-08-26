FROM node:6-slim

MAINTAINER Tim Dorr <tim@showcaseidx.com>

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json /usr/app/
RUN apt-get update \
  && apt-get install -y --fix-missing --no-install-recommends build-essential make python \
  && npm install --production \
  && rm -rf /var/lib/apt/lists/* /root/.node /root/.node-gyp \
  && apt-get purge -y --auto-remove build-essential make python

RUN touch /usr/app/.env
COPY . /usr/app

CMD ["npm", "start"]
