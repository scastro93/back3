FROM node:carbon

RUN apt-get update && apt-get install netcat -y

COPY ./user/src /var/lib/app
COPY ./core /var/lib/core
COPY ./user/scripts /var/lib/app

WORKDIR /var/lib/app

RUN chmod -R +x startup.* /var/lib/app/node_modules/* && yarn

EXPOSE 80

ENTRYPOINT ["./startup.sh"]
