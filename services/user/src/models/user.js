'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    var User = sequelize.define(
        'User',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                isUnique: true,
                allowNull: false,
                // validate: {
                // 	isEmail: true,
                // },
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: {
                        args: 3,
                    },
                },
            },
        },
        {}
    );
    User.associate = function(models) {};

    return User;
};
