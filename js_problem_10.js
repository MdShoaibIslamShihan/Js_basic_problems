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
