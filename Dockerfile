FROM node:7-slim

MAINTAINER Tim Dorr <tim@showcaseidx.com>

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json yarn.lock /usr/app/
RUN apt-get update \
  && apt-get install -y --fix-missing --no-install-recommends build-essential make python \
  && yarn global add node-gyp \
  && yarn --pure-lockfile --production \
  && yarn cache clean \
  && rm -rf /var/lib/apt/lists/* /root/.node /root/.node-gyp \
  && apt-get purge -y --auto-remove build-essential make python

COPY . /usr/app

CMD ["yarn", "start"]
