/**
 * Write an algorithm that takes an array and moves all of the zeros to the end,
 * preserving the order of the other elements.
 **/

function moveZeros (arr) {
    let zeros = [];
    let sortArr = arr.filter((value) => {
        if (value !== 0) {
            return true;
        } else {
            zeros.push(0);
            return false;
        }
    });
    sortArr = sortArr.concat(zeros);
    return sortArr;
}

module.exports = moveZeros;
