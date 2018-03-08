const usersController = require('../controllers/UserController.js');

const resolvers = {
  Mutation: {
    addUser: () => {
      usersController.addUser(root, args, context, info);
    },
  },
  Query: {
    getUser: (root, args, context, info) => {
      return usersController.getUser(root, args, context, info);
    }
  },
};

module.exports = { resolvers };
