const assert = require('assert');
const passPolicy = require('./adventCalc22.ts');
const inputExample = require('./puzzleInputExample.json');
const input = require('./puzzleInput');

describe('AdventCalc22', function () {

    describe('PasswordPhilosophy', function () {

        it('should return 1', function () {
            var result = passPolicy.passwordPhilosophy(inputExample);
            console.log(result);
            assert.equal(result, 1);
        });

        it('should return puzzle result 249', function () {
            var result = passPolicy.passwordPhilosophy(input);
            console.log(result);
            assert.equal(result, 249);
        });

    });

});