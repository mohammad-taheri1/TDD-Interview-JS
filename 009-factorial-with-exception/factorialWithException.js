// Solution One
// function factorialWithException(inputNumber) {
//   // negative check
//   if (inputNumber < 0) throw new Error("negative");

//   // zero input
//   if (inputNumber === 0) throw new Error("zero");

//   let result = 1;

//   for (let i = inputNumber; i >= 1; i--) {
//     result *= i;
//   }

//   return result;
// }

// Solution Two
function factorialWithException(inputNumber) {
  // negative check
  if (inputNumber < 0) throw new Error("negative");

  // zero input
  if (inputNumber === 0) throw new Error("zero");

  if(inputNumber === 1) {
    return 1;
  }

  // 5! = 5 * 4!
  return inputNumber * factorialWithException(inputNumber - 1)

 
}

module.exports = factorialWithException;
