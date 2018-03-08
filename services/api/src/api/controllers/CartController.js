const gateway = require('../helpers/gateway');

module.exports = {
  createCart(root, args, context) {
    try {
      const request = {
        userId: args.input.userId,
      };
      return gateway.sendUser('Cart', 'createCart', request);
    } catch (e) {
      console.log('err in controller', e);
    }
  },
  addProductsToCart(root, agrs, context) {
    try {
      const request = {
        cid: args.input.cid,
        pid: args.input.pid,
      };
      return gateway.sendUser('Cart', 'createCart', request);
    } catch (e) {
      console.log('err in controller', e);
    }
  },
  checkout(root, args, context) {
    try {
      const request = {
        id: args.input.id,
      };
      return gateway.sendUser('cart', 'checkout', request);
    } catch (e) {
      console.log('err in controller', e);
    }
  },
  checkCart(root, args, context) {
    try {
      const request = {
        id: args.input.id,
      };
      return gateway.sendUser('cart', 'checkCart', request);
    } catch (e) {
      console.log('err in controller', e);
    }
  },
};
