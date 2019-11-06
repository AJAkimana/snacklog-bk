import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';
import {
  correctCartData,
  cartWithNoUser,
  cartWithNoSize
} from '../mocks/testMocks';

chai.use(chaiHttp);

describe('Cart', () => {
  before(done => {
    chai
      .request(server)
      .post(`/api/carts`)
      .send(correctCartData)
      .end((err, res) => {
        done();
      });
  });
  it('Should get list of products on cart', done => {
    const {
      user: { username }
    } = correctCartData;
    chai
      .request(server)
      .get(`/api/carts/${username}`)
      .end((err, res) => {
        expect(res.body).to.have.status(200);
        done();
      });
  });
  it('Should not create cart without username', done => {
    chai
      .request(server)
      .post('/api/carts')
      .send(cartWithNoUser)
      .end((err, res) => {
        expect(res.body).to.have.status(400);
        done();
      });
  });
  it('Should add product to cart', done => {
    chai
      .request(server)
      .post('/api/carts')
      .send(correctCartData)
      .end((err, res) => {
        expect(res.body).to.have.status(201);
        done();
      });
  });
  it('Should not add product to cart without size', done => {
    chai
      .request(server)
      .post('/api/carts')
      .send(cartWithNoSize)
      .end((err, res) => {
        expect(res.body).to.have.status(400);
        done();
      });
  });
});
