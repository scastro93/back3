const cartController = require('./controllers/CartController');

const resolvers = {
    Mutation: {
        addProductsToCart: () => {
            cartController.create(root, args, context, info);
        },
        deleteProductInCart: () => {
            cartController.delete(root, args, context, info);
        },
    },
    Query: {
        checkout: (root, args, context, info) => {
            const args = {
                input: {
                    id: root.id,
                },
            };
            return cartController.checkout(root, args, context, info);
        },
        checkCart: (root, args, context, info) => {
            const args = {
                input: {
                    id: root.id,
                },
            };
            return cartController.checkCart(root, args, context, info);
        },
    },
};

module.exports = { resolvers };
