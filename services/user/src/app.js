const grpc = require('grpc');
const server = new grpc.Server();
const port = process.env.PORT || 50051;

const models = require('./models');

const CartProto = grpc.load('/var/lib/core/protos/user/cart.proto').cart;
const UserProto = grpc.load('/var/lib/core/protos/user/user.proto').user;

// const CartProto = grpc.load('./api/protos/cart.proto').cart;
// const UserProto = grpc.load('./api/protos/user.proto').user;

// GRPC Controllers
// const CartController = require(__dirname + '/api/controllers/cart.js');
const UserController = require(__dirname + '/api/controllers/user.js');

// server.addService(CartProto.Cart.service, CartController);
server.addService(UserProto.User.service, UserController);
server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());

server.start();

console.log(`Listening on port ${port}`);
