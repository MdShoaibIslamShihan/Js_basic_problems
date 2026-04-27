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

/*
📌 3. Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
Compare two numbers and print which one is greater.
Check if two values are equal using ==.
Check if a number is greater than 10.
*/

let numb1 = 50; let numb2 = 30;
console.log(numb1 > numb2);

console.log(5 == "5");

console.log(15 > 10);

/*
Check if a number is between 10 and 50.
Compare two values using == and === and print the difference.
Check if a person is eligible to vote (age ≥ 18).
*/

let w = 25;
console.log(w >= 10 && w <= 50);

console.log(40 == "40");    // true
console.log(40 === "40");   // false

let age = 55;
if ( age >= 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not eligible");
}

/*
Compare two variables with different data types and explain result of == vs ===.
Build a grading system:
Marks ≥ 80 → A
≥ 60 → B
≥ 40 → C
< 40 → Fail
Check if three numbers are equal or not using comparison operators.
*/

let marks = 75;
if (marks >= 80) {
  console.log("A");
} else if (marks >= 60) {
  console.log("B");
} else if (marks >= 40) {
  console.log("C");
} else {
  console.log("Fail");
}

let p = 6; let q = 6; let r = 6;
console.log(p === q && q === r);

/*
Take a number and check:
If it is even or odd
If it is greater than 50
Build a simple calculator using +, -, *, /
Create a mini login check (compare username & password)
*/

let check = 36;
console.log(check % 2 === 0 ? 'even' : 'odd');
console.log(check > 50);

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid login");
}