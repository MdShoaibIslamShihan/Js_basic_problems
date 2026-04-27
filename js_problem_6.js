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

/*
Check username and password:
If both correct → "Login successful"
If username wrong → "Invalid username"
If password wrong → "Incorrect password"
12. Triangle Type Checker
*/

/*let correctUsername = "Dosim";
let correctPassword = "12345";

let username = prompt("Enter Username");
let password = prompt("Enter password");

if (username !== correctUsername) {
    console.log("Invalid username");
} else if (password !== correctPassword) {
    console.log("Invalid password");
} else {
    console.log("Login successful");
} */

/*
Triangle Type Checker-
Input 3 sides:
All equal → "Equilateral"
Two equal → "Isosceles"
All different → "Scalene"
13. Electricity Bill
*/

let a2 = 5; let b2 = 5; let c = 5;

if (a2 === b2 && b2 === c) {
    console.log("Equilateral");
} else if (a2 === b2 || b2 === c || c === a2) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}

/*
Units consumed:
First 100 → 5/unit
Next 100 → 7/unit
Above 200 → 10/unit
Calculate total bill.
*/

let units = 350;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (units * 5) + (units - 100) * 7;
} else {
    bill = (units * 5) + (units * 7) + (units - 200) * 10;
}

console.log(bill);

/*
Check a number:
Between 1–50 → "Low"
51–100 → "Medium"
Above 100 → "High"
*/

let numberCheck = 45;
if (numberCheck < 1 && numberCheck > 50) {
    console.log("Low");
} else if (numberCheck <= 100) {
    console.log("Medium");
} else {
    console.log("High");
}

/*
Nested Condition (Strong Practice)

Check a number:
If positive:
If even → "Positive Even"
Else → "Positive Odd"
Else:
If negative → "Negative Number"
Else → "Zero"
*/

let nnum = -4;

if (nnum > 0) {
    if (nnum % 2 === 0) {
        console.log("Positive Even");
    } else {
        console.log("Positive Odd");
    }
} else  {
    if (nnum < 0) {
        console.log("Negative Number");
    } else {
        console.log("Zero");
    }
}