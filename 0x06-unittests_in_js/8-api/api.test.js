const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('GET /', () => {
    it('checks for response', (done) => {
        request(app)
            .get('/')
            .expect(200, 'Welcome to the payment system')
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});