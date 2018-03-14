class CartFactory {

  createCart(userId) {
    return {
      id,
      totalPrice,
      userId
    };
  }

  addProductsToCart(ProductId, CartId) {
    return {
      id,
      totalPrice,
      userId
    };
  }

  checkout(id) {
    return {
      id,
      totalPrice,
      userId
    };
  }

  checkCart(id) {
    return {
      id,
      email,
      password
    };
  }
}

module.exports = new CartFactory();

