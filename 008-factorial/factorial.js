// hint 1:
// 5! = 5 * 4 * 3 * 2 * 1

// hint 2:
// 5!
// = 5 * 4!
// = 5 * 4 * 3!
// = 5 * 4 * 3 * 2!
// = 5 * 4 * 3 * 2 * 1

// Solution one
// function factorial(inputNumber) {
//   let result = 1;

//   for (let i = inputNumber; i >= 1; i--) {
//     result *= i;
//   }

//   return result;
// }

// Solution Two
function factorial(inputNumber) {
  if (inputNumber === 0) {
    return 1;
  }

  // = 5 * 4!
  return inputNumber * factorial(inputNumber - 1);
}

module.exports = factorial;
