function palindromeInteger(inputNumber) {
  // Step1: handle zero input
  if(inputNumber === 0) return false;


  // Step2: reverse input number
  const reversedInput = inputNumber
      .toString()
      .split('')
      .reverse()
      .join('');

      
  // Step 3: return appropriate boolean value
  // Dont forget the sign of input number
  if( parseInt(inputNumber) === Math.sign(inputNumber) * parseInt(reversedInput)) {
    return true;
  }
  return false;
  
}

module.exports = palindromeInteger;
