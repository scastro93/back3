const gateway = require('../helpers/gateway');

module.exports = {
  addUser(root, args, context) {
    const request = {
      email: args.input.email,
      password: args.input.password,
    };
    return gateway.sendUser('user', 'addUser', request);
  },
  getUser(root, args, context) {
    const request = {
      id: args.input.id,
    };
    return gateway.sendUser('user', 'getUser', request);
  },
};
