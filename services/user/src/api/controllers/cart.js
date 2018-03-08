const { Cart } = require('../../models');
const { Product } = require('../../models');

class CartController {
  async createCart(call, callback) {
    try {
      const cart = await Cart.create(call.request);
      callback(null, cart);
    } catch (error) {
      callback(error);
    }
  }

  async addProductsToCart(call, callback) {
    try {
      const cart = await Cart.findById(call.request.cid);
      const product = await Product.findById(call.request.pid);

      if (!cart || !product) {
        throw new Error('not found');
      }

      await cart.addItem(product); // error here
      const cartFetched = await cart.getItems();
      callback(null, cartFetched);
    } catch (err) {
      callback(err);
    }
  }

  async deleteCart(call, callback) {
    try {
      await Cart.delete(call.request.cid);
      callback(null, true);
    } catch (err) {
      callback(err);
    }
  }

  async checkCart(call, callback) {
    try {
      const cart = await Cart.findById(call.request.cid);
      callback(null, cart);
    } catch (err) {
      callback(err);
    }
  }

  async checkout(call, callback) {
    try {
      let cart = await Cart.findById(call.request.cid);
      let total = await cart.checkout();
      cart.totalPrice = total;
      callback(null, cart);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = new CartController();
