const grpc = require('grpc');
const server = new grpc.Server();
const port = 50051;

const models = require('./models');

const CartProto = grpc.load('/var/lib/core/protos/user/cart.proto').cart;
const UserProto = grpc.load('/var/lib/core/protos/user/user.proto').user;

// Protos
// const CartProto = grpc.load(__dirname + '/api/protos/cart.proto').cart;
// const UserProto = grpc.load(__dirname + '/api/protos/user.proto').user;

// GRPC Controllers
const CartController = require(__dirname + '/api/controllers/cart.js');
const UserController = require(__dirname + '/api/controllers/user.js');

server.addService(CartProto.Cart.service, CartController);
server.addService(UserProto.User.service, UserController);
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());

models.sequelize.sync().then(() => {
    server.start();
});

console.log(`Listening on port ${port}`);

module.exports.app = server;
