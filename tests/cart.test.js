import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';
import { correctCartData } from '../mocks/testMocks';

chai.use(chaiHttp);

describe('Cart', () => {
  it('Should get list of products on cart', done => {
    chai
      .request(server)
      .get('/api/carts/username')
      .end((err, res) => {
        expect(res.body).to.have.status(200);
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
});
