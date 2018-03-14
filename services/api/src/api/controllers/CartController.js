const gateway = require('../helpers/gateway');

module.exports = {
  createCart(root, args, context) {
    const request = {
      userId: args.input.userId,
    };
    return gateway.sendUser('cart', 'createCart', request);
  },
  addProductsToCart(root, agrs, context) {
    const request = {
      ProductId: args.input.ProductId,
      CartId: args.input.CartId,
    };
    return gateway.sendUser('Cart', 'addProductsToCart', request);
  },
  checkout(root, args, context) {
    const request = {
      id: args.input.id,
    };
    return gateway.sendUser('cart', 'checkout', request);
  },
  checkCart(root, args, context) {
    const request = {
      id: args.input.id,
    };
    return gateway.sendUser('cart', 'checkCart', request);
  },
};
