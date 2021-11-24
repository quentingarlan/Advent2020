const assert = require('assert');
const passPolicy = require('./adventCalc2.ts');
const inputExample = require('./puzzleInputExample.json');
const input = require('./puzzleInput');

describe('AdventCalc2', function () {

    describe('PasswordPhilosophy', function () {

        it('should return 2', function () {
            var result = passPolicy.passwordPhilosophy(inputExample);
            console.log(result);
            assert.equal(result, 2);
        });

        it('should return puzzle result 447', function () {
            var result = passPolicy.passwordPhilosophy(input);
            console.log(result);
            assert.equal(result, 447);
        });

    });

});