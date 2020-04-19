/**
 * An anagram is the result of rearranging the letters of a word to produce a new word.
 * Note: anagrams are case insensitive
 * Complete the function to return true if the two arguments given are anagrams of each other;
 * return false otherwise.
 **/


function isAnagram(test, original) {
    test = test.toLowerCase();
    original = original.toLowerCase();
    let anagram = '';

    for (let i = 0; i < test.length; i++) {
        for (let j = 0; j < original.length; j++) {
            if (test.charAt(i) === original.charAt(j)) {
                anagram += test.slice(i, i+1);
                break;
            }
        }
    }
    return anagram === test && test.length === original.length;
}

module.exports = isAnagram;
