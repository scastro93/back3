'use strict';
const userData = require('/var/lib/core/integration_fixtures/user');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin1@email.com',
        password: 'password',
      },
      {
        email: 'admin2@email.com',
        password: 'password',
      },
      {
        email: 'admin3@email.com',
        password: 'password',
      },
      {
        email: 'admin4@email.com',
        password: 'password',
      },
      {
        email: 'admin5@email.com',
        password: 'password',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(User, null, {});
  },
};
