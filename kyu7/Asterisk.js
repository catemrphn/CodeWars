/**
 * You are given a function that should insert an asterisk (*) between every pair of
 * even digits in the given input, and return it as a string.
 * If the input is a sequence, concat the elements first as a string.
 * The input can be an integer, a string of digits or a sequence containing integers only.
 * Examples:
 * 5312708     -->  "531270*8"
 * "0000"      -->  "0*0*0*0"
 * [1, 4, 64]  -->  "14*6*4"
 **/


function asteriscIt(digits) {
    let asterisk = digits.toString().split('').filter(num => num !== ',');
    let string = [];
    for (let i = 0; i < asterisk.length; i++) {
        string.push(asterisk[i]);
        if (asterisk[i] % 2 === 0 && asterisk[i+1] % 2 === 0) {
            string.push('*');
        }
    }
    return string.join('');
}

module.exports = asteriscIt;
