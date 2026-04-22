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