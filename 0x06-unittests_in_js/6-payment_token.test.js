const getPaymentRequestToApi = require('./6-payment_token');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    it("Async testing with done callback", function(done) {
        getPaymentRequestToApi(true)
        .then((data) => {
            expect(data).to.have.property('data');
            done();
        })

    });
});