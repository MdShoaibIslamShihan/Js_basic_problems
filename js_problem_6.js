/*
1. Even or Odd
Write a program that checks if a number is even or odd
*/

let check = 33;
if (check % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

/*
Take a number and print:
"Positive" if > 0
"Negative" if < 0
"Zero" if = 0
*/

let num = -3;

if (num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

/*
Ask for a person's age:
If age < 18 → "Minor"
Otherwise → "Adult"
*/

let ageOfPerson = 32;
if (ageOfPerson < 18) {
    console.log("Minor");
} else {
    console.log("Adult");
}

/*
Take a student's marks:
If marks ≥ 40 → "Pass"
Else → "Fail"
*/

let studentMark = 21;
if (studentMark >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

/*
Compare two numbers and print the larger one.
*/

let a = 43; let b = 92;
if (a > b) {
    console.log("a is lerger");
} else {
    console.log("b is larger");
}

/*
Grade Calculator
Input marks (0–100):
80+ → "A"
60–79 → "B"
40–59 → "C"
Below 40 → "Fail"
*/

let mark = 66;
if (mark > 80) {
    console.log("A");
} else if (mark >= 60) {
    console.log("B");
} else if (mark >= 40) {
    console.log("C");
} else {
    console.log("Fail");
}

/*
Take two numbers and an operator (+, -, *, /):
Perform the operation using if-else if.
*/

let input1 = 5;
let input2 = 4;
let operator = "*";

if (operator === "+") {
    console.log(input1 + input2);
} else if (operator === "-") {
    console.log(input1 - input2);
} else if (operator === "*") {
    console.log(input1 * input2);
} else if (operator === "/") {
    console.log(input1 / inout2);
} else {
    console.log("Invalid operator");
}

/*
Input temperature:
≥ 30 → "Hot"
20–29 → "Warm"
< 20 → "Cold"
*/

let temp = 10;
if (temp >= 30) {
    console.log("Hot");
} else if (temp >= 20) {
    console.log("Warm");
} else {
    console.log("Cold");
}

/*
If purchase amount:
≥ 1000 → 20% discount
500–999 → 10% discount
< 500 → no discount
Print final price.
*/

let amount = 800;
let finalPrice;

if (amount >= 1000) {
    finalPrice = amount * 0.8;
} else if (amount >= 500) {
    finalPrice = amount * 0.9;
} else {
    finalPrice = amount;
}
console.log(finalPrice);