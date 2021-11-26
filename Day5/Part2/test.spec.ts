const assert = require('assert');
const binaryBoarding = require('./adventCalc.ts');
let testStringArray = require('./string.json');

describe('AdventCalc', function () {

    describe('binaryBoarding', function () {

        it('should return 357', function () {
            var result = binaryBoarding.BinaryBoarding("FBFBBFFRLR");
            assert.equal(result, 357);
        });
        it('should return 567', function () {
            var result = binaryBoarding.BinaryBoarding("BFFFBBFRRR");
            assert.equal(result, 567);
        });
        it('should return 119', function () {
            var result = binaryBoarding.BinaryBoarding("FFFBBBFRRR");
            assert.equal(result, 119);
        });
        it('should return 820', function () {
            var result = binaryBoarding.BinaryBoarding("BBFFBBFRLL");
            assert.equal(result, 820);
        });
        it('should return answer', function () {
            var result = binaryBoarding.BinaryBoardingList(testStringArray);
            assert.equal(result, 2);
        });
    });

});