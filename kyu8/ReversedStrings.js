// Complete the solution so that it reverses the string value passed into it.


function reverseString(str){
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
};

module.exports = reverseString;
