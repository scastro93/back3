const gateway = require('../helpers/gateway');

module.exports = {
  addUser(root, args, context) {
    const request = {
      email: args.email,
      password: args.password,
    };

    return gateway.sendUser('user', 'addUser', request);
  },
  getUser(root, args, context) {
    const request = {
      id: args.id,
    };
    return gateway.sendUser('user', 'getUser', request);
  }
};
