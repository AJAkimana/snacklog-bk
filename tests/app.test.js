import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/app';

chai.use(chaiHttp);

describe('App', () => {
  it('App should raise error, when not route', done => {
    chai
      .request(server)
      .get('/carts')
      .end((err, res) => {
        expect(res.body).to.have.status(404);
        done();
      });
  });
});
