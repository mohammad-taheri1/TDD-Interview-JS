// Solution One -> with string convert and array helper functions
// function palindromeInteger(inputNumber) {
//   // Step1: handle zero input
//   if(inputNumber === 0) return false;

//   // Step2: reverse input number
//   const reversedInput = inputNumber
//       .toString()
//       .split('')
//       .reverse()
//       .join('');

//   // Step 3: return appropriate boolean value
//   // Dont forget the sign of input number
//   if( parseInt(inputNumber) === Math.sign(inputNumber) * parseInt(reversedInput)) {
//     return true;
//   }
//   return false;

// }

// Solution two -> just numbers operations
function palindromeInteger(inputNumber) {
  if (inputNumber === 0) return false;

  let reversedNumber = 0;
  let originalNumber = inputNumber;

  if (inputNumber < 0) {
    originalNumber *= -1;
  }

  while (originalNumber > 0) {
    reversedNumber = reversedNumber * 10 + (originalNumber % 10);
    originalNumber = Math.floor(originalNumber / 10);
    console.log(`originalNumber: ${originalNumber} - rev :  ${reversedNumber}`);
  }

  return reversedNumber * Math.sign(inputNumber) === inputNumber;
}

module.exports = palindromeInteger;
