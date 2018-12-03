import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import './incident';

chai.use(chaiHttp);
const should = chai.should();

describe('Test to see if App working', () => {
  it('it should return welcome to iReporter', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.an('string');
        res.text.should.equal('Welcome to iReporter');
        done();
      });
  });
});

describe('Test for Api', () => {
  it('it should return welcome to iReporter API', (done) => {
    chai.request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.message.should.equal('welcome to iReporter API');
        done();
      });
  });
});
