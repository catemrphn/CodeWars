/**
 * Write a function that combines two arrays by alternatingly taking elements from each array in turn.
 * The arrays may be of different lengths, with at least one character/digit.
 * One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
 **/


function mergeArrays(firstArray, secondArray) {
    let arr = [];
    let length = firstArray.length > secondArray.length ? firstArray : secondArray;

    for (let i = 0; i < length.length; i++) {
        firstArray[i] ? arr.push(firstArray[i]) : '';
        secondArray[i] ? arr.push(secondArray[i]) : '';
    }
    return arr;
}

module.exports = mergeArrays;

