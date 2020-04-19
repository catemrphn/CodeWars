const assert = require('assert');

const centuryFromYear = require('../kyu8/CenturyFromYear');
const evenOrOdd = require('../kyu8/EvenOrOdd');
const isPalindrome = require('../kyu8/PalindromeStrings');
const removeChar = require('../kyu8/RemoveFirstAndLastChar');
const reverseString = require('../kyu8/ReversedStrings');
const positiveSum = require('../kyu8/SumOfPositive');


describe('8 kyu', function () {
    it('Century from year', function () {
        assert.equal(centuryFromYear(1705), 18);
        assert.equal(centuryFromYear(1900), 19);
        assert.equal(centuryFromYear(1601), 17);
        assert.equal(centuryFromYear(89), 1);
    });

    it('Even or odd', function () {
        assert.equal(evenOrOdd(2), 'Even');
        assert.equal(evenOrOdd(7), 'Odd');
        assert.equal(evenOrOdd(1), 'Odd');
    });

    it('Palindrome strings', function () {
        assert.equal(isPalindrome('anna'), true);
        assert.equal(isPalindrome('walter'), false);
        assert.equal(isPalindrome(12321), true);
    });

    it('Remove first and last character', function () {
        assert.equal(removeChar('eloquent'), 'loquen');
        assert.equal(removeChar('country'), 'ountr');
        assert.equal(removeChar('person'), 'erso');
        assert.equal(removeChar('place'), 'lac');
    });

    it('Reversed strings', function () {
        assert.equal(reverseString('world'), 'dlrow');
        assert.equal(reverseString('laptop'), 'potpal');
        assert.equal(reverseString('place'), 'ecalp');
    });

    it('Sum of positive', function () {
        assert.equal(positiveSum([1,2,3,4,5]), 15);
        assert.equal(positiveSum([-1,2,3,4,-5]), 9);
    });
});

