/**
 * Given an array, find the integer that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 **/


function findOddInt(A) {
    let arr = A.sort();
    let odd;
    for (let i = 0; i < arr.length; i++) {
        odd = arr.filter(el => el === arr[i]);
        if (odd.length % 2 !== 0){
            odd = odd[0];
            break;
        }
    }
    return odd;
}

module.exports = findOddInt;
