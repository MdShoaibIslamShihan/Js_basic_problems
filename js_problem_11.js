/*
Identify Primitive Types (Basics)
Given the following values:
"Hello", 25, true, null, undefined
Identify the type of each value
Print the type using typeof (where applicable)
*/

console.log(typeof "Hello");
console.log(typeof 25);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

/*
Create Variables (Primitive Types)
Create variables for:

a string (your name)
a number (your age)
a boolean (are you a student)
a null value
an undefined variable
Print all values
*/

let name = "Dimitry";
let age = 39;
let isStudent = true;
let emptyValue = null;
let notDefine;
console.log(name, age, isStudent, emptyValue, notDefine);

/*
Array vs Object (Non-Primitive Basics)
Create:
an array of 3 colors
an object with name and age
Print both and identify which one is array and which one is object
*/

let colors = ["Red", "Green", "Blue"];
let person = {
    name: "Ali",
    age: 10,
}
console.log(colors);
console.log(person);

/*
Primitive vs Reference (Copy Behavior)
Create a variable with a number value. Copy it to another variable and change the second variable.----
Print both values-----
Then:
Create an object and copy it to another variable. Modify one property.
Print both objects
*/

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

let obt1 = {
    Month: "february",
    year: 3099,
};

obt2 = obt1;
obt2.year = 2378;
console.log(obt1);
console.log(obt2);