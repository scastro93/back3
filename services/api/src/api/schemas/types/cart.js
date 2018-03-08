const CartDefs = `
  input createOrderInput {
    id: Int
    userId: Int
  }
  type Cart {
    id: Int,
    totalPrice: Float,
    userId: Int,
  }
  input addProductInput {
    cid: Int,
    pid: Int,
  }
  input cartId {
    id: Int
  }
`;

module.exports = CartDefs;
