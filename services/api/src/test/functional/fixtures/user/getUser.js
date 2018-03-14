const _ = require('lodash');
const userFixtures = require('/var/lib/core/integration_fixtures/user');
const userFactory = require('../../factories/user');

const FixturesHelper = require('../helpers/fixtures-helper');

const updatePasswordUser = _.find(userFixtures, { email: 'update_password@email.com' });

class UpdatePasswordFixtures extends FixturesHelper {
  constructor() {
    const { password } = updatePasswordUser;
    const data = userFactory.updatePassword(password, 'new password');

    super(data);
  }

  wrongOldPassword() {
    return userFactory.updatePassword('wrong password', 'new password');
  }

  wrongConfirmationPassword() {
    const { password } = updatePasswordUser;
    const data = userFactory.updatePassword(password, 'new password');

    data.confirmation_password = 'wrong confirmation';

    return data;
  }

  validPassword() {
    const { password } = updatePasswordUser;

    return userFactory.updatePassword(password, 'new password');
  }
}

module.exports = new UpdatePasswordFixtures();
