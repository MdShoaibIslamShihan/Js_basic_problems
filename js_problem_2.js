/*
🧩 Problem 1: Create a String

👉 Create a variable name and store your name.

👉 Then print:

Hello, my name is Mamun
*/

let name = "Mamun";
console.log(`Hello, my name is ${name}`);

/*
🧩 Problem 2: String Length
let text = "JavaScript";

👉 Task:

Print the total number of characters
*/

let text = "JavaScript";
console.log("otal number of characters:", text.length);

/*
🧩 Problem 3: Upper & Lower Case
let message = "hello world";

👉 Task:

Convert to uppercase
Convert to lowercase 
*/

let message = "hello world";
console.log(message.toUpperCase());
console.log(message.toLowerCase());

/*
🧩 Problem 4: Slice Method
let word = "Programming";

👉 Task:

Extract "Program"
Extract "ming"
*/

let word = "Programming";
console.log(word.slice(0, 7));
console.log(word.slice(7));

/*
🧩 Problem 5: Substring Method
let text = "Bangladesh";

👉 Task:

Extract "Bangla"
Extract "desh"
*/

let textPart = "Bangladesh";
let part1 = textPart.substring(0, 6);
let part2 = textPart.substring(6);

console.log(part1);
console.log(part2);

/*
🧩 Problem 6: First & Last Character
let city = "Dhaka";

👉 Task:

Print first character
Print last character
*/

let city = "Dhaka";

let firstChar = city.at(0);
let lastChar = city.at(-1);

console.log(firstChar);
console.log(lastChar);