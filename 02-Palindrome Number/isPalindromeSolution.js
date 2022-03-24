/**
 * @param {number} inputNumber
 * @return {boolean}
 */
const isPalindrome = (inputNumber) => {
    return parseInt(inputNumber) === parseInt(inputNumber.toString().split('').reverse().join(''));
}

module.exports = isPalindrome;