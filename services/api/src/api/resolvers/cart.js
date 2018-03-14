const controller = require('../controllers/CartController');

const resolvers = {
  Mutation: {
    createCart: (root, args, context) => {
      return controller.createCart(root, args, context);
    },
    addProductsToCart: (root, args, context) => {
      return controller.addProductsToCart(root, args, context);
    },
    checkout: (root, input, context) => {
      return controller.checkout(root, args, context);
    },
  },
  Query: {
    checkCart: (root, args, context) => {
      return controller.checkCart(root, args, context);
    },
  },
};

module.exports = { resolvers };
