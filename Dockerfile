FROM node:18.18.0-alpine

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk update
RUN apk add --no-cache bash
RUN npm config set registry http://mirrors.cloud.tencent.com/npm/
RUN npm i -g @nestjs/cli typescript ts-node

COPY package*.json /tmp/app/
RUN cd /tmp/app && npm install

COPY . /usr/src/app
RUN cp -a /tmp/app/node_modules /usr/src/app
COPY ./wait-for-it.sh /opt/wait-for-it.sh
RUN chmod +x /opt/wait-for-it.sh
COPY ./startup.dev.sh /opt/startup.dev.sh
RUN chmod +x /opt/startup.dev.sh
RUN sed -i 's/\r//g' /opt/wait-for-it.sh
RUN sed -i 's/\r//g' /opt/startup.dev.sh

WORKDIR /usr/src/app
RUN if [ ! -f .env ]; then cp env-example .env; fi
RUN cat .env
RUN npm run build

CMD ["/opt/startup.dev.sh"]
