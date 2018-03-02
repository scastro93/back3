const { Cart } = require("../../models");
const { Product } = require("../../models");

class CartController {
	async checkout(call, callback) {
		try {
			const cart = await Cart.findById(call.request.cid);

			if (!cart) {
				throw new Error("not found");
			}

			cart = cart.map((item) => {
				return {
					code: item.code,
					price: item.price,
					qty: item.qty,
				};
			});

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
				throw new Error("not found");
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
			const cart = await Cart.findById(call.request.cid);

			await cart.removeItem(call.dataValues.pid);

			const newCart = await Cart.getItems();
			callback(null, newCart);
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
