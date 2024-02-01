const request = require("request");
const expect = require("chai").expect;

describe("Index page", function() {
    const options = {
	url: "http://localhost:7865/",
	method: "GET"
    }
    it("check correct status code", function(done) {
	request(options, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content", function(done) {
	request(options, function(err, res, body) {
	    expect(body).to.contain("Welcome to the payment system");
	    done();
	});
    });
    it("check correct content length", function(done) {
	request(options, function(err, res, body) {
	    expect(res.headers['content-length']).to.equal('29');
	    done();
	});
    });

});

describe("Cart page", function() {
    const options = {
    url: "http://localhost:7865/cart/12",
    method: "GET"
    }
    it("check correct status code", function(done) {
    request(options, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
    });
    it("check correct content", function(done) {
    request(options, function(err, res, body) {
        expect(body).to.contain("Payment methods for cart 12");
        done();
    });
    });
    it("check correct content length", function(done) {
    request(options, function(err, res, body) {
        expect(res.headers['content-length']).to.equal('32');
        done();
    });
    });
    it("checks for correct staus code for invalid cart id", function(done) {
        const options = {
        url: "http://localhost:7865/cart/hello",
        method: "GET"
        }
        request(options, function(err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

});