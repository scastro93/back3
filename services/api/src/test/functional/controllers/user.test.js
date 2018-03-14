const _ = require('lodash');
const API = require('../helpers/api')
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const assert = chai.assert;

const getUserFixtures = require('../fixtures/user');

chai.should();
chai.use(require('chai-as-promised'));

describe('functional/Users controller', () => {
  
  afterEach(() => {
    API.build = '';
  });

  it('addUser - mail exist', async () => {
    await API.buildMutation('addOneFailedMailExist', getUserFixtures.addOneFailedMailExist, ['email', 'password']);
    await API.execute();
    expect(API.result.response.request.req.res.req.res.statusMessage).to.be.a('string');
    expect(API.result.response.request.req.res.req.res.statusMessage).equal('Bad Request');
    expect(API.result.response.request.req.res.req.res.statusCode).to.be.a('number');
    expect(API.result.response.request.req.res.req.res.statusCode).equal(400);
  });

  it('addUser', async () => {
    await API.buildMutation('addOneUser', getUserFixtures.addOneUser, ['email', 'password']);
    await API.execute();
    expect(API.result).to.be.an('object');
    expect(API.result.data).to.have.property('addUser');
    expect(API.result.data.getUser).to.have.property('id');
  });

  it('getUser - id not found', async () => {
    await API.buildMutation('getUserNoUser', getUserFixtures.getUserNoUser, ['id']);
    await API.execute();
    expect(API.result.response.request.req.res.req.res.statusMessage).to.be.a('string');
    expect(API.result.response.request.req.res.req.res.statusMessage).equal('Bad Request');
    expect(API.result.response.request.req.res.req.res.statusCode).to.be.a('number');
    expect(API.result.response.request.req.res.req.res.statusCode).equal(400);
  });

  it('getUser', async () => {
    await API.buildMutation('getUser', getUserFixtures.getUser, ['id']);
    await API.execute();
    expect(API.result).to.be.an('object');
    expect(API.result.data).to.have.property('getUser');
    expect(API.result.data.getUser).to.have.property('id');
  });
});