import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import './incident';

chai.use(chaiHttp);
const should = chai.should();

describe('Test for App.js', () => {
  it('it should return welcome to me API', (done) => {
    chai.request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.message.should.equal('welcome to me API');
        done();
      });
  });
});
