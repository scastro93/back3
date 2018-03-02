// 'use strict';
//
// const { Cart, Product } = require('./models');
//
// Cart.findOne({
//     where: { id: 1 },
// })
//     // .then((product) => {
//     //     // cart.checkout();
//     //     where: {
//     //         id: 1;
//     //     }
//     // })
//     .then((cart) => {
//         return Promise.all([
//             cart,
//             Product.findOne({
//                 where: { id: 2 },
//             }),
//         ]);
//     })
//     .then(([cart, product]) => {
//         const x = Promise.all([cart.getItems()]);
//         console.log(x);
//     })
//     .catch('error');
