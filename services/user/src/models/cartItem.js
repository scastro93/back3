'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var CartItem = sequelize.define(
    'CartItem',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {}
  );
  CartItem.associate = function(models) {};
  return CartItem;
};
