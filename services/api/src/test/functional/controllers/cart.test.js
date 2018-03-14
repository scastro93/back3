const _ = require('lodash');
const API = require('../helpers/api')
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const assert = chai.assert;

const getCartFixtures = require('../fixtures/cart');

chai.should();
chai.use(require('chai-as-promised'));

describe('functional/Cart controller', () => {

  afterEach(() => {
    API.build = '';
  });

  it('positive', async () => {
    await API.buildMutation('createCart', getUserFixtures.createCart, ['id']);
    await API.execute();
    expect(API.result).to.be.an('object');
    expect(API.result.data).to.have.property('getUser');
    expect(API.result.data.getUser).to.have.property('email');
  });
});