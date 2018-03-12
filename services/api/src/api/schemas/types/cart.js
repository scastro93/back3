const CartDefs = `
  type Cart {
    id: Int,
    totalPrice: Float,
    userId: Int,
  }
  input createOrderInput {
    id: Int!
    userId: Int!
  }
  input addProductInput {
    CartId: Int!,
    ProductId: Int!,
  }
  input cartId {
    id: Int!
  }
`;

module.exports = CartDefs;
