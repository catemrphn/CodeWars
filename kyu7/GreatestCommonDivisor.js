/**
 * Find the greatest common divisor of two positive integers.
 * The integers can be large, so you need to find a clever solution.
 * The inputs x and y are always greater or equal to 1,
 * so the the greatest common divisor will always be an integer that is also greater or equal to 1.
 **/


 function greatestCommonDivisor(x,y){
    let divisor = 0;
    let minInteger = x > y ? y : x;
    let bigInteger = x > y ? x : y;

    for (let i = minInteger; i >= 1; i--) {
        if (minInteger % i === 0 && bigInteger % i === 0) {
            divisor = i;
        }
        if (divisor !== 0) break;
    }
    return divisor;
}

module.exports = greatestCommonDivisor;
