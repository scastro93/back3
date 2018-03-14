'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Hat',
        code: 'HAT',
        price: 7,
        qty: 2
      },
      {
        name: 'Pants',
        code: 'PANTS',
        price: 13,
        qty: 4
      },
      {
        name: 'T-Shirt',
        code: 'TSHIRT',
        price: 19,
        qty: 5
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(Products, null, {});
  },
};
