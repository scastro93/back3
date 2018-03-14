const cartTypes = require('./types/cart');

const cartDefs = `
  extend type Mutation {
    createCart(input: createCartInput!): Cart
    addProductsToCart(input: addProductInput!): Cart
    checkout(input: cartId!): Cart
  }

  extend type Query {
    checkCart(input: cartId!): Cart
  }
`;

module.exports = [cartTypes, cartDefs];
