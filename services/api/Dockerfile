FROM node:carbon

COPY ./api/src /var/lib/app
COPY ./core /var/lib/core

WORKDIR /var/lib/app

RUN yarn install

EXPOSE 80

CMD [ "node", "app.js" ]
