import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';

chai.use(chaiHttp);

describe('Product', () => {
  it('Should get list of products', done => {
    chai
      .request(server)
      .get('/api/products')
      .end((err, res) => {
        expect(res.body).to.have.status(200);
        done();
      });
  });
  it('Should get product details', done => {
    chai
      .request(server)
      .get('/api/products/1')
      .end((err, res) => {
        expect(res.body).to.have.status(200);
        done();
      });
  });
  it('Should not get product details which does not exist', done => {
    chai
      .request(server)
      .get('/api/products/345')
      .end((err, res) => {
        expect(res.body).to.have.status(404);
        done();
      });
  });
});
