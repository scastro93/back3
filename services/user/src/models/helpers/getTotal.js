'use strict';
const discount = require('./discount');

const getTotal = (products) => {
  let total = 0;
  products.forEach(function(item) {
    if (item.code == 'HAT') {
      total += item.qty * item.price;
    } else if (item.code == 'PANTS') {
      total += discount.discount_pants(item.qty, item.price);
    } else if (item.code == 'TSHIRT') {
      total += discount.discount_tshirt(item.qty, item.price);
    } else {
      console.log('codigo no valido');
    }
  });
  return total;
};

module.exports = getTotal;
