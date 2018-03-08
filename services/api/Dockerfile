FROM node:carbon

RUN mkdir -p /var/lib/app
RUN mkdir -p /var/lib/core

COPY ./api/src /var/lib/app
COPY ./core /var/lib/core

WORKDIR /var/lib/app

RUN yarn

EXPOSE 80

CMD [ "node", "app.js" ]
