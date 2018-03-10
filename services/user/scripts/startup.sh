#!/bin/bash

set -e

./node_modules/.bin/sequelize db:migrate
# ./node_modules/.bin/sequelize db:seed:all
node app.js
