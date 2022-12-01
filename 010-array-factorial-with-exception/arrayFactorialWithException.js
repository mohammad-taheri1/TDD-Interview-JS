// hint:

// we must loop on our inputArray

// if any item is negative, we will raise an exception.

// else, we calculate the factorial of item

// then, save the calculated factorial into an temp array

// finally, return the temp array

// Solution One
// const arrayFactorialWithException = (inputArray) => {
//   let tempResultArray = [];

//   inputArray.forEach((item) => {
//     //
//     if (item < 0) throw new Error();

//     let tempFactorialValue = 1;

//     for (let i = item; i >= 1; i--) {
//       tempFactorialValue *= i;
//     }

//     tempResultArray.push(tempFactorialValue);
//   });

//   return tempResultArray;
// };

// Solution Two
const arrayFactorialWithException = (inputArray) => {
  let tempResultArray = [];

  inputArray.forEach((item) => {
    tempResultArray.push(factorial(item));
  });

  return tempResultArray;
};

const factorial = (input) => {
  if (input < 0) throw new Error();

  let tempFactorialValue = 1;

  for (let i = input; i >= 1; i--) {
    tempFactorialValue *= i;
  }

  return tempFactorialValue;
};

module.exports = arrayFactorialWithException;
