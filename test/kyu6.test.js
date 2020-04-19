const assert = require('assert');

//kyu 6
const toCamelCase = require('../kyu6/ConvertStringToCamelCase');
const isPrime = require('../kyu6/PrimeNumber');
const multiplesOf3Or5 = require('../kyu6/MultiplesOf3Or5');
const findOddInt = require('../kyu6/FindTheOddInt');

describe('kyu6', function () {
    it('Convert string to camel case', function() {
        assert.equal(toCamelCase('the_stealth_warrior'), 'theStealthWarrior');
        assert.equal(toCamelCase('The-Stealth-Warrior'), 'TheStealthWarrior');
        assert.equal(toCamelCase('A-B-C'), 'ABC');
    });

    it('Find the odd int', function () {
        assert.equal(findOddInt([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
        assert.equal(findOddInt([1,1,2,-2,5,2,4,4,-1,-2,5]),-1);
    });

    it('Is a number prime?', function () {
        assert.equal(isPrime(0),false);
        assert.equal(isPrime(1),false);
        assert.equal(isPrime(2),true);
        assert.equal(isPrime(5),true);
        assert.equal(isPrime(5099),true);
    });

    it('Multiples of 3 or 5', function () {
        assert.equal(multiplesOf3Or5(10),23);
        assert.equal(multiplesOf3Or5(20),78);
        assert.equal(multiplesOf3Or5(200),9168);
    });
});
