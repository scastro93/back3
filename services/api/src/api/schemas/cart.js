const cartTypes = require('./types/cart');

const cartDefs = `
  extend type Mutation {
    updateTotalPrice(input: UpdateTotalPriceInput!): Cart
  }
`;

module.exports = [cartTypes, cartDefs];
