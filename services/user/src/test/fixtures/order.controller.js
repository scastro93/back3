module.exports = {
  orderCreate: {
    dataValues: {
      id: 1,
      totalPrice: 100,
      userId: 1,
    },
  },
  orderCreateCall: {
    request: {
      id: 1,
      totalPrice: 100,
      userId: 1,
    },
  },
  orderCreateRejected: {
    dataValues: {
      id: 1,
      totalPrice: 100,
      userId: 1,
    },
  },
  addProductsToCart: {
    dataValues: {
      name: 'Hat',
      code: 'HAT',
      price: 123,
      qty: 1,
    },
    addItem() {
      return true;
    },
  },
  addProductOrderProduct: {
    getOneOrder: {
      dataValues: {
        id: 1,
        name: 'hola',
        price: 11,
        code: '33',
      },
    },
  },
  addProductRequest: {
    request: {
      cid: 4,
      pid: 1,
    },
  },
  getCart: {
    id: 4,
    totalPrice: 1,
    userId: 1,
  },
  getProduct: {
    id: 1,
    name: 'asd',
    code: 'HAT',
    price: 10.0,
    qty: 1,
  },
  addItem: {
    cid: 1,
    pid: 1,
  },
};
