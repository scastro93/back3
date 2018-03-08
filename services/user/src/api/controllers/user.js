const { User } = require('../../models');

class UserController {
  async addUser(call, callback) {
    try {
      const newUser = {
        email: call.dataValues.email,
        password: call.dataValues.password,
      };
      await User.create(newUser);
      callback(null, newUser);
    } catch (err) {
      callback(err);
    }
  }

  async getUser(call, callback) {
    try {
      const user = await User.findById(call.request.email);

      callback(null, user);
    } catch (err) {
      callback(err);
    }
  }

  async getAllUsers(call, callback) {
    try {
      const users = await User.find();

      callback(null, users);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = new UserController();
