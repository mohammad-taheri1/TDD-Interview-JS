// # 1
// function reverseInteger(inputNumber) {
//     temp = inputNumber.toString().split('').reverse().join('');

//     return inputNumber >=0 ? parseInt(temp) : parseInt(temp) * -1;
// }

// # 2
function reverseInteger(inputNumber) {
    temp = inputNumber.toString().split('').reverse().join('');

    return parseInt(temp) * Math.sign(inputNumber);
}


module.exports = reverseInteger;