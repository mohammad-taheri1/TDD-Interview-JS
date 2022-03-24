/**
 * @param {string} inputString
 * @return {boolean}
 */
const isPalindrome = (inputString) => {
    const lowercaseInput = inputString.toLowerCase();
    return lowercaseInput === lowercaseInput.split('').reverse().join('');
}

module.exports = isPalindrome;