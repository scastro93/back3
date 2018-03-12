const _ = require('lodash');
const chai = require('chai');
const sinon = require('sinon');
const sandbox = sinon.sandbox.create();

const controller = require('../../../api/controllers/UsersController');
const gateway = require('../../../api/helpers/gateway');

chai.should();
chai.use(require('chai-as-promised'));

describe('unit/Users controller', () => {
  afterEach(() => {
    sandbox.restore();
  });

  describe('addUser', () => {
    it('positive', async () => {})
  });
  describe('getUser', () => {
    const fixtures = require('/var/lib/core/integration_fixtures/user');
    const user = _.find(fixtures, { email: 'update_password@email.com' });
    const { email, password } = user;

    it('positive', async () => {
      await API.buildMutation('createOrder', fixturesOrder.createOrder, ['id']);
      await API.execute();
      expect(API.result).to.be.an('object');
      expect(API.result.data).to.have.property('createOrder');
      expect(API.result.data.createOrder).to.have.property('id');
    });

    it('negative, id doesnot exist', async () => {
      await API.buildMutation('createOrder', fixturesOrder.createOrder, ['id']);
      await API.execute();
      expect(API.result).to.be.an('object');
      expect(API.result.data).to.have.property('createOrder');
      expect(API.result.data.createOrder).to.have.property('id');
    });
  });
});