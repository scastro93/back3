module.exports = {
  createCart: {
    userId: 1,
  },
  createdCartUserNoExist: {
    userId: 9999,
  },
  addProductOne: {
    idOrder: 1,
    idProduct: 1,
  },
  addProductTwo: {
    idOrder: 1,
    idProduct: 2,
  },
  addProductFailedNoProduct: {
    idOrder: 1,
    idProduct: 9999,
  },
  addProductFailedNoCart: {
    idOrder: 9999,
    idProduct: 1,
  },
  checkout: {
    id: 1
  },
  checkoutNoUser: {
    id: 9999
  },
  checkCart: {
    id: 1,
  },
  checkCartNoCart: {
    id: 9999,
  },
}