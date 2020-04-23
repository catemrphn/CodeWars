const assert = require('assert');
const isEqualArrays = require('./function');

const factorial = require('../kyu7/Factorial');
const mergeArrays = require('../kyu7/MergeTwoArrays');
const vowelsCount = require('../kyu7/VowelCount');
const findDupNumber = require('../kyu7/FindDuplicatedNumber');
const findDivisors = require('../kyu7/FindTheDivisors');
const greatestCommonDivisor = require('../kyu7/GreatestCommonDivisor');
const isAnagram = require('../kyu7/Anagram');
const asteriscIt = require('../kyu7/Asterisk');
const filterList = require('../kyu7/ListFiltering');

describe('kyu7', function () {
    it('Anagram Detection', function () {
        assert.equal(isAnagram("foefet", "toffee"),true);
        assert.equal(isAnagram("Buckethead", "DeathCubeK"),true);
        assert.equal(isAnagram("apple", "pale"),false);
        assert.equal(isAnagram("dumble", "bumble"), false);
    });

    it('Asterisk It', function () {
        assert.equal(asteriscIt(5312708), '531270*8');
        assert.equal(asteriscIt(9682135), '96*8*2135');
        assert.equal(asteriscIt([1, 4, 64, 68, 67, 23, 1]), '14*6*4*6*8*67231');
        assert.equal(asteriscIt('0000'), '0*0*0*0');
    });

    it('Factorial', function () {
        assert.equal(factorial(3), 6);
        assert.equal(factorial(1), 1);
        assert.equal(factorial(2), 2);
    });

    it('Find the divisions', function () {
        assert(isEqualArrays(findDivisors(15),[ 3, 5 ]));
        assert(isEqualArrays(findDivisors(12), [ 2, 3, 4, 6 ]));
        assert.equal(findDivisors(13), '13 is prime');
    });

    it('Find the duplicated number in a consecutive unsorted list', function () {
        assert.equal(findDupNumber([1,2,2,3]), 2);
        assert.equal(findDupNumber([1,3,2,5,4,5,7,6]), 5);
    });

    it('Greatest common divisor', function () {
        assert.equal(greatestCommonDivisor(30,12), 6);
        assert.equal(greatestCommonDivisor(8,9),1);
        assert.equal(greatestCommonDivisor(1,1), 1);
    });

    it('Merge two arrays', function () {
        assert(isEqualArrays(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [ 1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e', 6, 7, 8 ]));
        assert(isEqualArrays(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), [ 'a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5 ]));
        assert(isEqualArrays(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [ 2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's' ]));
    });

    it('Vomel Count', function () {
        assert.equal(vowelsCount('abracadabra'), 5);
        assert.equal(vowelsCount('pear tree'), 4);
        assert.equal(vowelsCount('o a kak ushakov lil vo kashu kakao'), 13);
        assert.equal(vowelsCount('tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty'), 168);
    });

    it('List Filtering', function () {
        assert(isEqualArrays(filterList([1,2,'a','b']),[1,2]));
        assert(isEqualArrays(filterList([1,'a','b',0,15]), [1,0,15]));
        assert(isEqualArrays(filterList([1,2,'aasf','1','123',123]), [1,2,123]));
    })
});
