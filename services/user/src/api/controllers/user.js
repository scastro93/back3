const { User } = require('../../models');

class UserController {
  async addUser(call, callback) {
    try {
      const user = await User.create(call.request);
      const payload = {
        id: user.dataValues.id,
        email: user.dataValues.email,
        password: user.dataValues.password
      };
      callback(null, payload);
    } catch (error) {
      callback(error);
    }
  }

  async getUser(call, callback) {
    try {
      const user = await User.findById(call.request.id);
      console.log("request: ", call.request)
      const payload = {
        id: user.dataValues.id,
        email: user.dataValues.email,
        password: user.dataValues.password
      };
      callback(null, payload);
    } catch (error) {
      callback(error);
    }
  }
}

module.exports = new UserController();
