const API = require('../helpers/api');
const fixturesUser = require('../fixtures/user');
const fixturesCart = require('../fixtures/cart');

module.exports = {
  seedAll: async () => {
    await API.buildMutation('addUser', fixturesUser.addOneUser, ['email', 'password']);
    await API.execute();

    await API.buildMutation('getUser', fixturesUser.getUser, ['id']);
    await API.execute();

    await API.buildMutation('createCart', fixturesCart.createCart, ['userId']);
    await API.execute();

    await API.buildMutation('checkCart', fixturesCart.checkCart, ['id']);
    await API.execute();
  },
};