const gateway = require('../helpers/gateway');

module.exports = {
  async checkout(root, args, context) {
    const request = {
      id: context.id,
    };

    try {
      const res = await gateway.sendUser('cart', 'checkout', request);
      return res;
    } catch (e) {
      console.log(err);
      return err;
    }
  },
  async addProductsToCart(root, args, context) {
    const request = {
      name: args.name,
      code: args.code,
      price: args.price,
      qty: args.qty,
    };

    try {
      await gateway.sendUser('cart', 'addProductsToCart', request);
      return true;
    } catch (e) {
      console.log(err);
      return err;
    }
  },
  async deleteProductInCart(root, args, context) {
    return true;
  },
  async checkCart(root, args, context) {
    return true;
  },
};
