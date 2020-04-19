/**
 * A palindrome is a word, phrase, number,
 * or other sequence of characters which reads the same backward or forward.
 * This includes capital letters, punctuation, and word dividers.
 * Implement a function that checks if something is a palindrome.
 **/


function isPalindrome(line) {
    let reverse = [];
    line = line.toString();
    for (let i = line.length; i >= 0; i--) {
        reverse.push(line.charAt(i));
    }
    reverse = reverse.join('');
    return line === reverse;
}

module.exports = isPalindrome;
