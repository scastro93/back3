'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Carts', [
      {
        totalPrice: 1,
        userId: 1
      },
      {
        totalPrice: 2,
        userId: 2
      },
      {
        totalPrice: 3,
        userId: 3
      },
      {
        totalPrice: 4,
        userId: 4
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(Cart, null, {});
  },
};
