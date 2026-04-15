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

/*
📌 *2. Assignment Operators (=, +=, -=, =, /=)
Assign a value to a variable and print it.
Use += to add 10 to a number.
Use *= to double a number.
*/

let num4 = 40;
console.log(num4);// 40

num4 += 10;
console.log(num4);// 50

num4 *= 2;
console.log(num4);// 100

/*
Start with a number and apply +=, -=, *= step by step and print final result.
Write a program to increase salary by 10% using +=.
Reduce a number by 20 using -=.
*/

let number = 30;
number += 10;// 40
number -= 20;// 20
number *= 2;// 40
console.log(number);// 40

let salary = 15000;
salary = salary += 0.10;
console.log(salary);// 15000.1

let value = 50;
value -= 20;
console.log(value);// 30

/*
Create a program where a value changes step-by-step using all assignment operators.
Simulate a bank balance where deposit and withdrawal use += and -=.
Write a program that updates a score based on different conditions using assignment operators.
*/

let x = 10;
x += 5;
x -= 3;
x *= 2;
x /= 4;
console.log(x);// 6

let bankBalance = 5000;
bankBalance += 500; // deposit
bankBalance -= 200; // withdrawal
console.log(bankBalance); // 5300

let score = 50;
score += 10; // bonus
score -= 5;  // penalty
console.log(score); 