const assert = require('assert');
const passPolicy = require('./adventCalc.ts');
const inputExample = require('./puzzleInputExample.json');
const input = require('./puzzleInput');

describe('AdventCalc', function () {

    describe('tobogganTrajectory', function () {

        it('should return 7', function () {
            var result = passPolicy.tobogganTrajectory(inputExample);
            console.log(result);
            assert.equal(result, 7);
        });

        it('should return puzzle result 447', function () {
            var result = passPolicy.tobogganTrajectory(input);
            console.log(result);
            assert.equal(result, 447);
        });

    });

});