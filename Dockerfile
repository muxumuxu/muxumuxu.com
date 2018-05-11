FROM node:9.0

MAINTAINER David Miotti <david@muxumuxu.com>

ENV APP_PATH='/app'

RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

COPY package.json $APP_PATH
RUN yarn install

COPY . $APP_PATH

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "npm", "start" ]
