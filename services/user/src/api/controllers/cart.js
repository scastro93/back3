const { Cart } = require('../../models');
const { Product } = require('../../models');

class CartController {
  async createCart(call, callback) {
    try {
      const cart = await Cart.create(call.request);
      callback(null, cart.dataValues.id);
    } catch (error) {
      callback(error);
    }
  }

  async deleteCart(call, callback){
    try {
      const cart = await Cart.delete(call.request.id)

      //validacion carrito existente
      if(!cart){
        throw new Error("no existe el carrito");
      }

      const carts = await Cart.find();

      callback(null, carts);
    } catch (error) {
      callback(error);
    }
  }

  async addProductsToCart(call, callback) {
    try {
      const cart = await Cart.findById(call.request.cid);
      const product = await Product.findById(call.request.pid);

      if (!cart) {
        throw new Error("no existe el carrito");
      }

      if (!product) {
        throw new Error("no existe el producto");
      }

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

  // async deleteProductsFromCart(call, callback){}

  async checkCart(call, callback) {
    try {
      const cart = await Cart.findById(call.request.id);

      if (!cart) {
        throw new Error("no existe el carrito");
      }

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

      if (!cart) {
        throw new Error("no existe el carrito");
      }
      
      cart = await cart.checkout();
      callback(null, getOne.total);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = new CartController();
