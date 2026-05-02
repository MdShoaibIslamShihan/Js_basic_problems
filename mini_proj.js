/*
🧮 Calculator 
Features:
Properties:
numbers
Methods:
add()
subtract()
multiply()
divide()
*/

let calculator = {
  numbers: [],

  // set numbers
  setNumbers: function(a, b) {
    this.numbers = [a, b];
  },

  add: function() {
    return this.numbers[0] + this.numbers[1];
  },

  subtract: function() {
    return this.numbers[0] - this.numbers[1];
  },

  multiply: function() {
    return this.numbers[0] * this.numbers[1];
  },

  divide: function() {
    if (this.numbers[1] === 0) {
      return "Cannot divide by zero";
    }
    return this.numbers[0] / this.numbers[1];
  }
};

// Use the calculator
calculator.setNumbers(20, 5);

console.log("Add:", calculator.add());
console.log("Subtract:", calculator.subtract());
console.log("Multiply:", calculator.multiply());
console.log("Divide:", calculator.divide());