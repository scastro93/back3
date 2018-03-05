const { Cart } = require('../../models');
const { Product } = require('../../models');

class CartController {
  async checkout(call, callback) {
    try {
      let cart = await Cart.findById(call.request.cid);

      if (!cart) {
        throw new Error('not found');
      }

      let total = await cart.checkout();

      callback(null, total.toFixed(2));
    } catch (err) {
      callback(err);
    }
  }

  async addProductsToCart(call, callback) {
    try {
      const cart = await Cart.findById(call.request.cid);

      if (!cart) {
        throw new Error('not found');
      }

      const newItem = {
        name: call.dataValues.name,
        code: call.dataValues.code,
        price: call.dataValues.price,
        qty: call.dataValues.qty,
      };

      await cart.addItems(newItem);
      const newCart = await Cart.getItems();
      callback(null, newCart);
    } catch (err) {
      callback(err);
    }
  }

  async deleteProductInCart(call, callback) {
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
      const newCart = await Cart.getItems();
      callback(null, newCart);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = new CartController();
