const formatHelper = require('../formatHelpers');

class UserFactory {
  createCart(params) {
    const { id } = params;

    const cart = {
      id: id,
    };

    return {
      query: `
        mutation {
          createCart(input: {
            ${cart.id}
          }) {
            id,
            totalPrice,
            userId
          }
        }
      `
    };
  }

  addProductsToCart(params) {
    const { ProductId, CartId } = params;

    const cartItem = {
      ProductId: ProductId,
      CartId: CartId
    };

    return {
      query: `
        mutation {
          addProductsToCart(input: {
            ${cartItem.ProductId}
            ${cartItem.CartId}
          }) {
            id,
            totalPrice,
            userId
          }
        }
      `
    };
  }

  checkout(params) {
    const { id } = params;

    const cart = {
      id: id,
    };

    return {
      query: `
        mutation {
          checkout(input: {
            ${cartItem.ProductId}
            ${cartItem.CartId}
          }) {
            id,
            totalPrice,
            userId
          }
        }
      `
    };
  }

  checkCart(params) {
    const { id } = params;

    const get = {
      id: id
    }
    return {
      query: `
        query{
          checkCart(input: {
            ${get.id}
          }){
            id,
            totalPrice,
            userId
          }
        }
      `
    };
  }
}

module.exports = new UserFactory();
