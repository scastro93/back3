const gateway = require('../helpers/gateway');

module.exports = {
    async checkout(root, args, context) {
        const request = {
            id: context.id,
        };

        try {
            const res = await gateway.sendUser('cart', 'checkout', request);
            return res;
        } catch (e) {
            console.log(err);
        }
    },
    async addProductsToCart(root, args, context) {
        const request = {
            name: args.name,
            code: args.code,
            price: args.price,
            qty: args.qty,
        };

        try {
            await gateway.sendUser('cart', 'addProductsToCart', request);
        } catch (e) {}
    },
    async deleteProductInCart(root, args, context) {},
    async checkCart(root, args, context) {},
};
