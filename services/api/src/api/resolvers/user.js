const usersController = require('../controllers/UserController.js');

const resolvers = {
  Mutation: {
    addUser: () => {
      return usersController.addUser(root, args, context);
    },
  },
  Query: {
    getUser: (root, args, context) => {
      return usersController.getUser(root, args, context);
    },
  },
};

module.exports = { resolvers };
