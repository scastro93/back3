const { Cart } = require('../../models');
const { Product } = require('../../models');

class CartController {
  async createCart(call, callback) {
    try {
      const cart = await Order.create(call.request);
      callback(null, cart.dataValues.id);
    } catch (error) {
      callback(error);
    }
  }

  async addProductsToCart(call, callback) {
    try {
      const cart = await Cart.findById(call.request.cid);
      const product = await Product.findById(call.request.pid);
      await cart.addItem(product);
      const payload = {
        id: cart.dataValues.id,
        totalPrice: cart.dataValues.totalPrice,
        userId: cart.dataValues.userId
      };
      callback(null, payload);
    } catch (err) {
      callback(err);
    }
  }

  async checkCart(call, callback) {
    try {
      const cart = await Cart.findById(call.request.id);
      const payload = {
        id: cart.dataValues.id,
        totalPrice: cart.dataValues.totalPrice,
        userId: cart.dataValues.userId
      }
      callback(null, payload);
    } catch (err) {
      callback(err);
    }
  }

  async checkout(call, callback) {
    try {
      let cart = await Cart.findById(call.request.id);
      cart = await cart.checkout();
      callback(null, getOne.total);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = new CartController();
