const { User } = require('../../models');

class UserController {
  async addUser(call, callback) {
    try {
      const newUser = {
        email: call.email,
        password: call.password,
      };
      await User.create(newUser);
      callback(null, newUser);
    } catch (err) {
      callback(err);
    }
  }

  async getUser(call, callback) {
    try {
      const user = await User.findById(call.request.id);
      callback(null, user);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = new UserController();
