const { User } = require('../../models');

class UserController {
    async addUser(call, callback) {
        try {
            const newUser = {
                email: call.dataValues.email,
                password: call.dataValues.password,
            };
            await User.save(newUser);
            callback(null, true);
        } catch (err) {
            callback(err);
        }
    }

    async getUser(call, callback) {
        try {
            const getUser = await User.findById(call.request.email);

            callback(null, true);
        } catch (err) {
            callback(err);
        }
    }
}

module.exports = new UserController();
