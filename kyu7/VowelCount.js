/**
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, and u as vowels for this Kata.
 * The input string will only consist of lower case letters and/or spaces.
 **/


function vowelsCount(str) {
    let vowelsCount = 0;
    let arr = str.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u'){
            vowelsCount++;
        }
    }
    return vowelsCount;
}

module.exports = vowelsCount;
