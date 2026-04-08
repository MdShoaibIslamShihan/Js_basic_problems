/*
🧩 Problem 1: Identify Data Types
let a = "Hello";
let b = 25;
let c = true;
let d;
let e = null;

👉 Task:
Use typeof to print the type of each variable.
*/

let a = "Hello";
let aResult = typeof(a);
console.log(aResult);

let b = 25;
console.log(typeof b);

let c = true;
console.log(typeof c);

let d;
console.log(typeof d);

let e = null;
console.log(typeof e);

/*
🧩 Problem 2: Fix the Output
let name = "John";
let age = 20;

console.log("My name is " + name + " and I am " + age + " years old");

👉 Task:
Rewrite this using template literals
*/

let name = "John";
let age = 20;
console.log(`My name is ${name} and I am ${age} years old`);

/*
🧩 Problem 3: Boolean Check
let isLoggedIn = false;

👉 Task:
Write an if statement:

If true → "Welcome user"
If false → "Please login"
*/

let isLoggedIn = false;

if (isLoggedIn == true) {
    console.log("Welcome user");
} else {
    console.log("Please login");
}

/*
🧩 Problem 4: String Length
let text = "JavaScript";

👉 Task:
Print:

Total number of characters
First 4 characters
*/

let text = "JavaScript";
console.log("Total number of characters: ", text.length);
console.log("First 4 characters: ", text.slice(0, 4));

/*
🧩 Problem 5: Number Calculation
let num1 = 10;
let num2 = 5;

👉 Task:

Add
Subtract
Multiply
Divide

Print all results
*/

let num1 = 10;
let num2 = 5;

let Add = num1 + num2;
console.log("Add:",Add);

let Subtract = num1 - num2;
console.log("Subtract:",Subtract);

console.log("Multiply:", num1 * num2);

console.log("Divide:", num1 / num2);

/*
🧩 Problem 6: Undefined vs Null
let aa;
let bb = null;

👉 Task:

Print both values
Print their types
Compare them (== and ===)

👉 Question: What’s the difference?
*/

let aa;
let bb = null;

console.log(typeof aa);
console.log(typeof bb);

console.log(aa == bb);  // true
console.log(aa === bb); // false

/*
🧩 Problem 7: Type Conversion
let str = "100";
let num = 50;

👉 Task:

Add them → result?
Convert string to number and add again
*/

let str = "100";
let num = 50;
console.log("addition of str and num:", str + num); // 10050

console.log("Result:", parseInt(str) + num);        // 150