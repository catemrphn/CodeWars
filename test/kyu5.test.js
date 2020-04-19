const assert = require('assert');
const isEqualArrays = require('./function');

const moveZeros = require('../kyu5/MovingZerosToTheEnd');

describe('kyu5', function() {
    it('Moving zeros to the end',function () {
        assert(isEqualArrays(moveZeros([1,2,0,1,0,1,0,3,0,1]), [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]));
        assert(isEqualArrays(moveZeros([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]), [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]));
        assert(isEqualArrays(moveZeros([false,1,0,1,2,0,1,3,"a"]), [ false, 1, 1, 2, 1, 3, 'a', 0, 0 ]));
    });
});
