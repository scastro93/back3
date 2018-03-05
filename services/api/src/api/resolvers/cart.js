const cartController = require('../controllers/CartController');

const resolvers = {
  Mutation: {
    addProductsToCart: cartController.create,
    deleteProductInCart: cartController.delete,
  },
  Query: {
    checkCart: (root, args, context, info) => {
      return cartController.checkCart(root, args, context, info);
    },
  },
  Cart: {
    checkout: (root, args, context, info) => {
      const args = {
        input: {
          id: args.id,
        },
      };
      return cartController.checkout(root, args, context, info);
    },
  },
};

module.exports = { resolvers };
