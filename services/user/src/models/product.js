'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    var Product = sequelize.define(
        'Product',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: Sequelize.STRING,
            code: Sequelize.STRING,
            price: Sequelize.FLOAT,
            qty: Sequelize.INTEGER,
        },
        {}
    );
    Product.associate = function(models) {};
    return Product;
};
