'use strict';
exports.discount_tshirt = (qty, price) => {
  let totalPrice = 0;
  if (qty >= 3) {
    totalPrice += qty * 19;
  } else {
    totalPrice += qty * price;
  }

  return totalPrice;
};

exports.discount_pants = (qty, price) => {
  let totalPrice = 0;
  if (qty % 2 == 0) {
    totalPrice += qty / 2 * price;
  } else {
    var newQty = qty - 1;
    totalPrice += newQty / 2 * price + price;
  }
  return totalPrice;
};
