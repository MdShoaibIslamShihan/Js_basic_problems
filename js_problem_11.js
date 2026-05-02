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

/*
Write a function that takes:

a string
a number
an array

Inside the function:

print the string in uppercase
add 10 to the number
print all elements of the array
*/

myFunction("Love is absent", 100, ["Life", "Death", "Love", "Sex"]);
function myFunction (str, num, arr) {
    console.log(str.toUpperCase());
    console.log(num + 10);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

/*
Create an object user with:
name (string)
age (number)
isActive (boolean)
skills (array)

Then:

Add a new skill to the array
Change isActive value
Copy the object to another variable and modify name
Print both objects and observe behavior
*/

let info = {
    name: "Dalim",
    age: 55,
    isActive: true,
    skills: ["js", "html"],
};

info.skills.push("css");

info.isActive = false;

let info2 = info;
info2.name = "Roni";

console.log(info);
console.log(info2);