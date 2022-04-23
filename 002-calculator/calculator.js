class Calculator {
    Add(a, b) {
      return a + b;
    }
    Sub(a, b) {
      return a - b;
    }
    Mul(a, b) {
      return a * b;
    }
    Div(a, b) {
      return Math.floor(a / b);
    }
  }
  
  module.exports = Calculator;