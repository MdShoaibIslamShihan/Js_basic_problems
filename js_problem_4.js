/*
📌 1. Arithmetic Operators (+ - * / %)
Write a program to add two numbers and print the result.
Find the remainder when 17 is divided by 5.
Multiply two numbers and display the output.
*/

let num1 = 5; let num2 = 3;
console.log(num1 + num2);

console.log(17 % 5);

console.log(5 * 3);

/*
Take three numbers and find their average.
Convert temperature from Celsius to Fahrenheit using formula:
F = (C × 9/5) + 32
Find the area of a rectangle using length and width.
*/

let m = 5; let n = 10; let o = 5;
let total = m + n + o;
console.log("average: ",total / 3);

let c = 99;
let f = (c * 9/5) + 32;
console.log(f);

let length = 30; let width = 40;
console.log("area of a rectangle:", length * width);

/*
Swap two numbers without using a third variable.
Calculate total marks of 5 subjects and find percentage.
Find the last digit of a number using modulus operator.
*/

let a = 5; let b = 10;
a = a + b; // 15
b = a - b; // 5
a = a - b; // 10
console.log(a, b); // 10 5

let totalMark = 10 + 20 + 20 + 30 + 40;
let percentage = (totalMark) / 5;
console.log(percentage);

let num3 = 12345;
console.log("last digit:",num3 % 10);