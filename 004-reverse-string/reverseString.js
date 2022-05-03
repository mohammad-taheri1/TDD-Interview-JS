// # 1
// function reverseString(inputString) {
//   let temp = "";

//   for(let i = inputString.length - 1; i >= 0; i--) {
//     temp += inputString[i];
//   }

//   return temp;
// }

// # 2
// function reverseString(inputString) {
//   let temp = inputString.split('');
//   temp = temp.reverse();
//   return temp.join('');
// }

// # 3
function reverseString(inputString) {
  let temp = "";

  for (let char of inputString) {
    temp = char + temp; 
  }

  return temp;
}


module.exports = reverseString;
