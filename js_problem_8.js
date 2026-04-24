/*
Create & Access Elements (Basics)--
Create an array of 5 favorite fruits.
Print the first and last element
Change the second element to another fruit
*/

let fruits = ["Banana", "Mango", "Jackfruit", "Blackberray"];
console.log("first element:", fruits[0]);
console.log("last element:", fruits[3]);

fruits[1] = "Orange";
console.log(fruits);

/*
Create an empty array.-
Add 3 numbers using push()
Remove the last number using pop()
Print the final array
*/

let emptyArr = [];
emptyArr.push(1, 2, 3);
console.log(emptyArr); // [ 1, 2, 3 ]

emptyArr.pop();
console.log(emptyArr);// [ 1, 2 ]

/*
shift() & unshift() Scenario (Methods)
You have an array of students: ["Ali", "Sara", "John"]
Add a new student at the beginning using unshift()
Remove the first student using shift()
Print the updated array
*/

let student = ["Ali", "Sara", "John"];
student.unshift("Shihan");
console.log(student);

student.shift();
console.log(student);

/*
Given an array of numbers [10, 20, 30, 40]--
Use a for loop to print all elements
Use forEach() to print each element multiplied by 2
Use for...of to calculate and print the total sum
*/

let numm = [10, 20, 30, 40];
for (let i = 0; i < numm.length; i++)
{console.log(numm[i])};

numm.forEach(function(numm) {
    console.log(numm * 2);
});

let sum = 0;
for (let numb of numm) {
    sum += numm;
}
console.log(sum);