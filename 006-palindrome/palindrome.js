// Solution 1
// function palindrome(inputString){
//     //step 1 : reverse our input string
//     let reversedString = inputString.split('').reverse().join('');

//     // step 2: check original and reverted string and return appropriate answer

//     if(inputString.toLowerCase() === reversedString.toLowerCase()) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Solution 2
// function palindrome(inputString){
//     //step 1 : reverse out input string
//     let reversedString = inputString.split('').reverse().join('');

//     // step 2: check original and reverted string and return appropriate answer

//     return (inputString.toLowerCase() === reversedString.toLowerCase()) ? true : false;
// }

// Solution 3
function palindrome(inputString){

    return (inputString.toLowerCase() === inputString.split('').reverse().join('').toLowerCase()) ? true : false;
}

module.exports = palindrome;