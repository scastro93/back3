'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  var User = sequelize.define(
    'User',
    {
      email: {
        type: Sequelize.STRING,
        isUnique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
    },
    {}
  );
  User.associate = function(models) {};

  return User;
};
