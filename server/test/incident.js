import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const should = chai.should();

describe('Test for All GET requests', () => {
  describe('Test for GET / red-flags', () => {
    it('should return an error', (done) => {
      chai.request(app)
        .get('/api/v1/red-flags')
        .set('Accept', 'application/json')
        .end((err, res) => {
          res.should.have.status(500);
          res.body.should.be.an('object');
          done();
        });
    });
  });
});

describe('Test for All PATCH request', () => {
  describe('Test for PATCH / red-flags/:id/comment', () => {
    it('should return an error', (done) => {
      const values = { comment: 'egbeda roads ehn' };
      chai.request(app)
        .patch('/api/v1/red-flags/1/comment')
        .send(values)
        .set('Accept', 'application/json')
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });

    it('should return Created red-flag record', (done) => {
      const values = {
        type: 'red-flag',
        location: 'egbeda',
        status: 'resolved',
        comment: 'get traffic on the bridge',
      };
      chai.request(app)
        .post('/api/v1/red-flags')
        .send(values)
        .set('Accept', 'application/json')
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

    it('should return Updated red-flag record\'s comment', (done) => {
      const values = { comment: 'egbeda roads ehn' };
      chai.request(app)
        .patch('/api/v1/red-flags/1/comment')
        .send(values)
        .set('Accept', 'application/json')
        .end((err, res) => {
          res.should.have.status(202);
          done();
        });
    });
  });
});

describe('Test for POST request', () => {
  it('should return Created red-flag record', (done) => {
    const values = {
      type: 'red-flag',
      location: 'egbeda',
      status: 'resolved',
      comment: 'get traffic on the bridge',
    };
    chai.request(app)
      .post('/api/v1/red-flags')
      .send(values)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });
});
