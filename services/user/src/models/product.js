'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  var Product = sequelize.define(
    'Product',
    {
      name: Sequelize.STRING,
      code: {
        type: Sequelize.ENUM,
        values: ['HAT', 'PANTS', 'TSHIRT'],
      },
      price: Sequelize.FLOAT,
      qty: Sequelize.INTEGER,
    },
    {}
  );
  Product.associate = function(models) {
    Product.belongsToMany(models.Cart, { through: 'CartItem' });
  };
  return Product;
};
