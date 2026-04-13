/*
Add two numbers: 12 and 8
Subtract 45 from 90
Multiply 9 and 7
Divide 81 by 9
*/

let ax = 12;
let bx = 8;
console.log(ax + bx);

let mx = 90;
let nx = 45;
console.log(mx - nx);

console.log(9 * 7);
console.log(81 / 9);

/*
Create two variables and perform all four operations (+, -, *, /)
Find the total price of 5 items if each costs 120
Calculate the average of 3 numbers
*/

let var1 = 25; let var2 = 5;
console.log(var1 + var2, var1 - var2, var1 * var2, var1 / var2);

let price = 120;
console.log("total price of 5 items:", price * 5);

let ave1 = 10; let ave2 = 20; let ave3 = 30;
console.log("average of 3 numbers:",(ave1 + ave2 + ave3) / 3);

/*
🔹 Math.round()
Level 1
Round 5.4
Round 8.6
Level 2
Round the value of a variable (e.g., 9.78)
Round the result of division (e.g., 25 / 4)
*/

let numX = 5.4;
console.log(Math.round(numX));  // 5
console.log(Math.round(8.6));   // 9

console.log(Math.round(9.78));  // 10
console.log(Math.round(25 / 4));// 6

/*
🔹 Math.random()
Level 1
Generate a random number between 0 and 1
Level 2
Generate a random number between 1 and 10
Generate a random number between 1 and 50
Simulate a dice roll (1–6)
*/

console.log("random number between 0 and 1:",Math.random());
console.log("random number between 1 and 10:",Math.floor(Math.random() * 10) + 1);
console.log("random number between 1 and 50:",Math.floor(Math.random() * 50) + 1);

/*
🔹 Math.max()
Level 1
Find the maximum of 5, 12, 8
Level 2
Find the largest number among 4 variables
Find the maximum value from an array
*/

let maxNum = [5, 12, 8];
console.log(Math.max(...maxNum));

let xx = 39; let xc = 4; let xy = 52; let xz = 40;
console.log(Math.max(xx, xc, xy, xz));

let ary = [40, 42, 99, 6];
console.log(Math.max(...ary));

/*
🔹 toFixed()
Level 1
Format 5.678 to 2 decimal places
Level 2
Format 12.34567 to 3 decimal places
Convert a number result into 2 decimal places after division
*/

console.log((5.678).toFixed(2));
console.log((12.34567).toFixed(3));

let result = 25 / 3;
console.log(result.toFixed(2));

/*
🔹 parseInt()
Level 1
Convert "50" into a number
Level 2
Convert "100px" into an integer
Convert "75abc" into an integer
*/

console.log(parseInt("50"));
console.log(parseInt("100px"));
console.log(parseInt("75abc"));

/*
🔹 parseFloat()
Level 1
Convert "45.67" into a number
Level 2
Convert "99.99$" into a float
Convert "123.456abc" into a float
*/

console.log(parseFloat("45. 67"));
console.log("99.99$");
console.log("123.456abc");

/*
🟡 Mixed / Medium Problems
Generate a random number between 1–100 and round it
Convert a string number to integer, then add 10
Convert a string float to number and format it to 2 decimal places
Find the largest number among three variables
Create a simple calculator using +, -, *, /
Generate a random number (1–10) and check if it is even or odd
*/


let rand = Math.random() * 100;
console.log(Math.round(rand));

let str = "30";
console.log(parseInt("30") + 10);

let fltStr = "58.746354";
console.log(parseFloat(fltStr).toFixed(2));

let a1 = 10, b1 = 20, c1 = 15;
console.log(Math.max(a1, b1, c1));

// calculator

let input1 = 20; let input2 = 5;
let operator = "/";

if (operator === "+") console.log(input1 + input2);
else if (operator === "-") console.log(input1 - input2);
else if (operator === "*") console.log(input1 * input2);
else if (operator === "/") console.log(input1 / input2);

// Even or Odd

let randomNum = Math.floor(Math.random() * 10) + 1;
if (randomNum % 2 === 0) {console.log("Even");}
else {console.log("Odd");}