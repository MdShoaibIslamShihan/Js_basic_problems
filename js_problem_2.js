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

/*
🧩 Problem 7: Full Name
let firstName = "Md";
let lastName = "Mamun";

👉 Task:

Combine using template literal
Output:
Md Mamun
*/

let firstName = "Md";
let lastName = "Mamun";
console.log(`${firstName} ${lastName}`);

/*
🧩 Problem 8: Greeting Message
let name = "Ali";
let age = 20;

👉 Task:
Using template literals, print:

Hello Ali, you are 20 years old
*/

let nameAli = "Ali";
let age = 20;
console.log(`Hello ${nameAli}, you are ${age} years old`);

/*
🧩 Problem 9: Extract Username
let email = "user@gmail.com";

👉 Task:

Extract only "user"
*/

let email = "user@gmail.com";
console.log(email.split("@")[0]);

/*
🧩 Problem 11: Check String Length
let password = "abc123";

👉 Task:

If length < 8 → "Weak password"
Else → "Strong password"
*/

let password = "abc123";
if (password.length < 8) {
    console.log("Weak password");
} else {
    console.log("Strong password");
}

/*
🧩 Problem 12: Reverse a String (Challenging 🔥)
let text = "hello";

👉 Task:
Output:

olleh
*/

let text3 = "hello";
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString("hello")); // olleh [Very Important]
