FROM node:carbon

COPY ./api/src /var/lib/app
COPY ./core /var/lib/core
COPY ./api/scripts /var/lib/app

WORKDIR /var/lib/app

RUN chmod -R +x startup.* /var/lib/app/node_modules/* && yarn

EXPOSE 80

ENTRYPOINT ["./startup.sh"]
