import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const should = chai.should();

describe('Test for All GET requests', () => {
  describe('Test for GET / red-flags', () => {
    it('it should return all red-flags', (done) => {
      chai.request(app)
        .get('/api/v1/red-flags')
        .set('Accept', 'application/json')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.an('object');
          console.log(res.body);
          // res.body.message.should.equal('welcome to me API');
          done();
        });
    });
  });
});
