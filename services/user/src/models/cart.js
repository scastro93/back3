'use strict';
const Sequelize = require('sequelize');
const getTotal = require('./helpers/getTotal');

module.exports = (sequelize, Sequelize) => {
    var Cart = sequelize.define(
        'Cart',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            totalPrice: {
                type: Sequelize.FLOAT,
                default: 0,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'User',
                    key: 'id',
                },
            },
        },
        {}
    );
    Cart.associate = function(models) {
        Cart.belongsToMany(models.Product, { through: 'CartItem', as: 'items' });
        models.Product.belongsToMany(Cart, { through: 'CartItem' });
        Cart.belongsTo(models.User, { as: 'user' });
    };

    Cart.prototype.checkout = async function() {
        let arrItems = await this.getItems();
        arrItems = arrItems.map((item) => {
            return {
                code: item.code,
                price: item.price,
                qty: item.qty,
            };
        });
        console.log(arrItems);
        let total = await getTotal(arrItems);
        console.log(total.toFixed(2));
        return total.toFixed(2);
    };

    return Cart;
};
