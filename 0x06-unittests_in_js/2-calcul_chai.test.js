const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");
describe('calculateNumber', () => {
    it('returns rounded sum', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('returns rounded sum', () => {
        expect(calculateNumber('SUM', 1, 3.7).to.equal(5));
    });
    it('returns rounded sum', () => {
        expect(calculateNumber('SUM', 1.2, 3.7).to.equal(5));
    });
    it('returns rounded subtract', () => {
        expect(calculateNumber('SUBTRACT', 1.5, 3.7).to.equal(-2));
    });
    it('returns rounded subtract', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 3.7).to.equal(-3));
    });
    it('returns a rounded divide', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5).to.equal(0.2));
    });
    it('returns a rounded divide', () => {
        expect(calculateNumber('DIVIDE', 1.5, 3).to.equal(0.67));
    });
    it('returns a rounded divide', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0).to.equal('Error'));
    });
});
