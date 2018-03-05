const usersController = require('./controllers/UsersController');

const resolvers = {
  Mutation: {
    addUser: () => {
      usersController.create(root, args, context, info);
    },
  },
  Query: {
    getUser: (root, args, context, info) => {
      const args = {
        input: {
          email: root.email,
        },
      };
      return usersController.getUser(root, args, context, info);
    },
  },
};

module.exports = { resolvers };
