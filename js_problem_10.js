/*
for Loop – Print Numbers
Write a for loop that prints numbers from 1 to 10.
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*
while Loop – Sum of Numbers
Write a while loop to calculate the sum of numbers from 1 to 5 and print the result.
*/

let i = 1;
let sum = 0;

while ( i <= 5) {
    sum = sum + i;
    i++;
}
console.log(sum);

/*
 do...while – At Least Once Execution
Write a do...while loop that prints numbers from 1 to 5.
*/

let j = 1;  // i=j

do {
    console.log(j);
    j++;
} while (j <= 5);


/*
Array Looping (for & for...of)----------
Given an array: [5, 10, 15, 20]
Use a for loop to print each element
Use a for...of loop to print each element multiplied by 2
*/

let arr = [5, 10, 15, 20];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let num of arr) {
    console.log(num * 2);
}

/*
break & continue (Control)---------
Write a loop from 1 to 10:
Skip number 5 using continue
Stop the loop completely when the number is 8 using break
Print the remaining numbers
*/

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i ===  8) {
        break;
    }
    console.log(i);
}