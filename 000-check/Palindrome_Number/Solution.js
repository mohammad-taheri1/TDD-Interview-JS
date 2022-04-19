// ***************  solution1  ***************
/**
 * @param {number} inputNumber
 * @return {boolean}
 */
// const isPalindrome = (inputNumber) => {
//     return parseInt(inputNumber) === parseInt(inputNumber.toString().split('').reverse().join(''));

// }

// ***************  solution2  ***************
/**
 * @param {number} inputNumber
 * @return {boolean}
 */
 const isPalindrome = (inputNumber) => {
        if(inputNumber < 0) return false;
        let reversedInput = 0;

        for(let i=inputNumber; i>=1; i = Math.floor(i/10)){
            reversedInput = reversedInput * 10 + i%10;
        }

        return reversedInput === inputNumber;

}

module.exports = isPalindrome;