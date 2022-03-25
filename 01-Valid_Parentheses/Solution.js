// ***************  solution1  ***************
/**
 * @param {string} inputString
 * @return {boolean}
 */
// const validParentheses = (inputString) => {

//     let stack = [];

//     for (let i = 0; i < inputString.length; i++) {
//         // console.log("i :", i, stack);
//         let char = inputString[i];

//         switch (char) {
//           case "(":
//             if (inputString.length > 1) {
//               stack.push(char);
//               // console.log("pushed (");
//             }
//             break;

//           case "{":
//             if (inputString.length > 1) {
//               stack.push(char);
//               // console.log("pushed {");
//             }
//             break;

//           case "[":
//             if (inputString.length > 1) {
//               stack.push(char);
//               // console.log("pushed [");
//             }
//             break;

//           case ")":
//             if (i === 0  || (stack.length === 1 && stack[0] !== "(") || stack.length === 0) {
//               return false;
//             } else if (stack[stack.length - 1] === "(") {
//               // console.log("poped (");
//               stack.pop();
//             } else {
//                 // console.log("validString for )");
//                 if (!validParentheses(stack)) return false;
//             }
//             break;

//           case "}":
//             if (i === 0 || (stack.length === 1 && stack[0] !== "{") || stack.length === 0) {
//               return false;
//             } else if (stack[stack.length - 1] === "{") {
//               // console.log("poped {");
//               stack.pop();
//             } else {
//                 // console.log("validString for }");
//                 if (!validParentheses(stack)) return false;
//             }
//             break;

//           case "]":
//             if (i === 0  || (stack.length === 1 && stack[0] !== "[") || stack.length === 0) {
//               return false;
//             } else if (stack[stack.length - 1] === "[") {
//               // console.log("poped [");
//               stack.pop();
//             } else {
//               // console.log("validString for ]");
//               if (!validParentheses(stack)) return false;
//             }
//             break;
//         }

//         // console.log(stack)
//     }

//       return stack.length === 0 ? true : false;

// }

// ***************  solution2  ***************
/**
 * @param {string} inputString
 * @return {boolean}
 */
const validParentheses = (inputString) => {

    let stack = [];

    for (let i = 0; i < inputString.length; i++) {
        // console.log("i :", i, stack);
        let char = inputString[i];

        switch (char) {
          case "(":
          case "{":
          case "[":
            if (inputString.length > 1) {
              stack.push(char);
              // console.log("pushed (");
            }
            break;

          case ")":
            if (i === 0  || (stack.length === 1 && stack[0] !== "(") || stack.length === 0) {
              return false;
            } else if (stack[stack.length - 1] === "(") {
              // console.log("poped (");
              stack.pop();
            } else {
                // console.log("validString for )");
                if (!validParentheses(stack)) return false;
            }
            break;

          case "}":
            if (i === 0 || (stack.length === 1 && stack[0] !== "{") || stack.length === 0) {
              return false;
            } else if (stack[stack.length - 1] === "{") {
              // console.log("poped {");
              stack.pop();
            } else {
                // console.log("validString for }");
                if (!validParentheses(stack)) return false;
            }
            break;

          case "]":
            if (i === 0  || (stack.length === 1 && stack[0] !== "[") || stack.length === 0) {
              return false;
            } else if (stack[stack.length - 1] === "[") {
              // console.log("poped [");
              stack.pop();
            } else {
              // console.log("validString for ]");
              if (!validParentheses(stack)) return false;
            }
            break;
        }

        // console.log(stack)
    }

      return stack.length === 0 ? true : false;

}


module.exports = validParentheses;
