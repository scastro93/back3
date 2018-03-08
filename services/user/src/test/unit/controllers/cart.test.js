'use strict';
const chai = require('chai');
const sinon = require('sinon');
const sandbox = sinon.sandbox.create();

const fixtures = require('../../fixtures/order.controller');
const controller = require('../../../api/controllers/cart');
const { Cart, Product } = require('../../../models');

const instanceMethods = Cart.prototype;
// const cart = sinon.createStubInstance(Cart);

chai.should();
const assert = chai.assert;
const expect = chai.expect;
chai.use(require('chai-as-promised'));

describe('Test to OrderController', async () => {
  beforeEach(() => {
    sandbox.restore();
  });

  it('Should create a new cart', async () => {
    const callback = sandbox.spy();
    sandbox.stub(Cart, 'create').resolves(fixtures.orderCreate);
    return controller
      .createCart(fixtures.getCart, callback)
      .should.be.fulfilled.then(() => {
        expect(callback.args[0][0]).to.be.a('null');
        expect(callback.args[0][1]).to.be.a('object');
        assert(callback.calledOnce);
      });
  });

  it('Should NOT create a new cart', async () => {
    const callback = sandbox.spy();
    sandbox.stub(Cart, 'create').rejects();
    return controller
      .createCart(fixtures.orderCreateRejected, callback)
      .should.be.fulfilled.then(() => {
        expect(callback.args[0]).to.be.a('array');
        assert(callback.calledOnce);
      });
  });

  it('Should add product to a Cart', async () => {
    const callback = sandbox.spy();
    sandbox.stub(Cart, 'findById').resolves(fixtures.getCart);
    sandbox.stub(Product, 'findById').resolves(fixtures.getProduct);
    // sandbox.stub(Cart, 'addItem').resolves(fixtures.addItem);
    return controller
      .addProductsToCart(fixtures.addProductRequest, callback)
      .should.be.fulfilled.then(() => {
        expect(callback.args[0]).to.be.a('array');
        assert(callback.calledOn);
      });
  });

  it('Should NOT add product to a Cart', async () => {
    const callback = sandbox.spy();
    sandbox.stub(Cart, 'findById').rejects(fixtures.getCart);
    sandbox.stub(Product, 'findById').rejects(fixtures.getProduct);
    // sandbox.stub(Cart, 'addItem').rejects(fixtures.addItem);
    return controller
      .addProductsToCart(fixtures.addProductRequest, callback)
      .should.be.fulfilled.then(() => {
        expect(callback.args[0]).to.be.a('array');
        expect(callback.args[0][0].id).to.be.a('number');
        expect(callback.args[0][0].totalPrice).to.be.a('number');
        expect(callback.args[0][0].userId).to.be.a('number');
        assert(callback.calledOn);
      });
  });

  it('Should get a cart', async () => {
    const callback = sandbox.spy();
    sandbox.stub(Cart, 'findById').rejects(fixtures.getCart);
    return controller
      .checkCart({ request: { id: 1 } }, callback)
      .should.be.fulfilled.then(() => {
        expect(callback.args[0]).to.be.a('array');
        expect(callback.args[0][0].id).to.be.a('number');
        expect(callback.args[0][0].totalPrice).to.be.a('number');
        expect(callback.args[0][0].userId).to.be.a('number');
        assert(callback.calledOnce);
      });
  });

  it('Should NOT get a cart', async () => {
    const callback = sandbox.spy();
    sandbox.stub(Cart, 'findById').rejects(fixtures.getCart);
    return controller
      .checkCart({ request: { id: 1 } }, callback)
      .should.be.fulfilled.then(() => {
        expect(callback.args[0]).to.be.a('array');
        expect(callback.args[0][0].id).to.be.a('number');
        expect(callback.args[0][0].totalPrice).to.be.a('number');
        expect(callback.args[0][0].userId).to.be.a('number');
        assert(callback.calledOnce);
      });
  });
});
