
var assert = require('assert');
var adventCalc =  require('./adventCalc.ts');
var puzzleInputExample =  require('./puzzleInputExample');
var puzzleInput =  require('./puzzleInput');

describe('AdventCalc', function () {

    describe('Sum2020', function(){

    it('should return 514579', function(){
        var result = adventCalc.Sum2020(puzzleInputExample);
        console.log(result);
        assert.equal(result, 514579);
    });

    it('should return puzzle result 788739', function(){
        var result = adventCalc.Sum2020(puzzleInput);
        console.log(result);
        assert.equal(result, 788739);
    });

    });

});