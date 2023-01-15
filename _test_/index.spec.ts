import {expect} from 'chai'
import assert from 'assert'
import {sum} from '../src/index'

describe('sum', () => {
    it('should return the sum of two numbers', () => {
        expect('hi').equal("hi")
        assert.equal('hi',"hi")
    })
    it("Should return the sum of two numbers", () => {
        expect(sum(1, 2)).equal(3);
        expect(sum(10, 20)).equal(30);
        expect(sum(-5, 5)).equal(0);
    });

    it("Should work with decimal numbers", () => {
        expect(sum(1.5, 2.5)).equal(4);
        expect(sum(10.25, 20.75)).equal(31);
    });

    it("Should work with negative numbers", () => {
        expect(sum(-1, -2)).equal(-3);
        expect(sum(-10, -20)).equal(-30);
        expect(sum(-5, 5)).equal(0);
    });

    it("Should throw an error if input is not a number", () => {
        //@ts-ignore
        assert.throws(() => sum("1", 2), TypeError, "Input must be a number");
        //@ts-ignore
        expect(() => sum(1, true)).to.throw(TypeError, "Input must be a number");
        //@ts-ignore
        expect(() => sum(1, "2")).to.throw();
    });
    
})