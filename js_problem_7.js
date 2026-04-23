// Write a function called `greet` that prints 'Hello, World!' to the console.

function greet() {
    console.log("Hellow, World");
} 
greet();

// Declare a function `square` that takes a number and prints its square.

function square(n) {
    console.log(n * n);
}
square(4);

// Write a function `celsiusToFahrenheit` that converts a Celsius temperature to Fahrenheit. Call it with 100 and print the result.

function celsiusToFahrenheit(c) {
     return (c * 9/5) + 32;
}
console.log(celsiusToFahrenheit(100));

// Declare a function `sumArray` that takes an array of numbers and prints their total.

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; ++i) {
        total += arr[i];
    }
    console.log(total);
}
sumArray([1, 2, 3, 4, 5]);

// Declare a function `flattenArray` that takes a nested array (any depth) and prints a fully flattened version without using Array.flat().
// e.g., [1,[2,[3,[4]]]] → [1,2,3,4]

function flattenArray(arr) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flattenArray([1,[2,[3,[4]]]]));

// Write a function `add` that accepts two parameters `a` and `b` and prints their sum.
//Hint: Both parameters are positional — order matters when calling.

function add(a, b) {
    console.log(a + b);
}
add(5, 5);

/*
Create a function `introduce` with parameters `name` and `age` that prints: 'Hi, I'm [name] and I'm [age] years old.'
Hint: Use a template literal with backticks.
*/

function introduce(name, age) {
    console.log(`Hi, I'm ${name} and I'm ${age} years old`);
}
introduce("Khamba", 43);

// Write a function `multiply` with a default parameter so that calling `multiply(5)` returns 10.

function multiply(a, b = 2) { // b = 2 dhora hoyese
    return a * b;
}
console.log(multiply(3, 6));

// Write a function `sum` that accepts any number of arguments using rest parameters and returns their total.

function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(3, 5));

// Write a function that swaps the values of two variables using a destructuring trick inside the function.
// Hint: Use array destructuring: [a, b] = [b, a].

function swap( c, d) {
    [c, d] = [d, c];
    return [c, d];
}
console.log(swap(8, 4));

// Build a function `pipe(...fns)` that takes multiple functions and returns a new function. The returned function passes its argument through each function in sequence.

function pipe(...fns) {
    return function (value) {
        let result = value;

        for (let i = 0; i < fns.length; i++);
        result = fns[i](result);
    }
    return result;
}

/*.....Return Values.... */

// Write a function `double` that takes a number and returns twice its value. Store the result in a variable and print it.

function double(n) {
    return n * 2;
}
console.log(double(4));

// Create a function `getFullName(firstName, lastName)` that returns the full name as a single string.

function getFullName(fn, ln) {
    return `${fn} ${ln}`;
}
console.log(getFullName("kabila", "Khan"));

// Write a function `max` that accepts two numbers and returns the larger one.

function max(a, b) {
    return a > b ? a : b;
}
console.log(max(6, 13));

// ....... New Question........

/*
Function Expression – Check Even or Odd
Create a function expression that takes a number and returns "Even" or "Odd" depending on the input.
*/

function check(num) {
    if (num % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(check(6));

/*
Callback Basics – Custom Calculator
Write a function that takes two numbers and a callback function.
The callback will perform an operation (like add, subtract, multiply).
Call your main function with different callbacks to perform different operations.
*/

function calculator(m, n, operation) {
    return operation(m, n)
}

// callback function
function add(m, n) {
    return m + n;
}
function subtract(m, n) {
    return m - n;
}
function multiply(m, n) {
    return m * n;
}

console.log(calculator(5, 3, add));
console.log(calculator(5, 3, subtract));

/*
Write a function that takes:

an array of numbers
a callback function

The function should:

apply the callback to each element
return a new array with the modified values
*/

const processArray = (arr, callback) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
// callback function
let double2 = num => num * 2;
let square2 = num => num * num;

console.log(processArray([1, 2, 3], double2));
console.log(processArray([1, 2, 3], square2));
