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