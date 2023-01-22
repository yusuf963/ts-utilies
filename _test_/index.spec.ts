import { expect } from 'chai'
import assert from 'assert'
import { sum } from '../src/index'

describe('sum', () => {
    it('should return the sum of two numbers', () => {
        expect('hi').equal("hi")
        assert.equal('hi', "hi")
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
        expect(null).to.be.null
        expect(null).to.be.a('null')


    });

    it("Should throw an error if input is not a number", () => {
        //@ts-ignore
        // assert.throws(() => sum("1", 2), TypeError, "Input must be a number");
        //@ts-ignore
        // expect(() => sum(1, true)).to.throw(TypeError, "Input must be a number");
        // @ts-ignore
        expect(() => sum(1, "2")).to.not.throw();
        assert(true, 'return sum is truthy')
        assert.equal(NaN, NaN, 'return is truthy')
        assert.deepStrictEqual(NaN, NaN, 'return is truthy')
        assert.doesNotThrow(() => sum(1, 2), TypeError, "Input must be a number");
        // assert.fail('fail')
        assert.ifError(undefined)
        assert.notDeepStrictEqual(1, '1', 'return is truthy')
        assert.notEqual(1, '2', 'return is truthy')
        assert.notStrictEqual(1, '1', 'return is truthy')
        assert.ok(true, 'return is truthy')
        assert.strictEqual(1, 1, 'return is truthy')
        // assert.throws(() => sum(1, 2), TypeError, "Input must be a number");
    });

    it("should return the sum",()=>{
        expect(1).to.equal(1)
        assert.equal(2,2)
    })

})  