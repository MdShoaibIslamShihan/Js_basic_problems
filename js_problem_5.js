/*
Login Status Check-
You are given a boolean variable isLoggedIn.
Write a condition to display a message:
"Welcome back!" if the user is logged in
"Please log in" otherwise
*/

let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in");
}

/*
Age Verification-
Given a variable age, check if the user is eligible to vote (age must be 18 or older).
Output true or false.
*/

let age = 32;
if (age >= 18) {
    console.log("eligible to vote");
} else {
    console.log("not eligible");
}

/*
Password Match-
Two variables password and confirmPassword are given.
Check if both are the same and return true or false.
*/

const password = "Neu67t0n";
const confirmPassword = "Neu67t0n";
let isMatch = password === confirmPassword;
console.log(isMatch);

/*
Simple AND Condition-
Given two boolean variables hasID and isAdult, determine if a person is allowed entry (both must be true).
*/

const hasID = true;
const isAdult = true;
if (hasID && isAdult) {
    console.log("can enter");
} else {
    console.log("can not enter");
}

/*
NOT Operator Practice-
Given a boolean variable isRaining, return true if it is NOT raining.
*/

let isRaining = false;
let result = !isRaining;
console.log(result);

/*
User Access Control-
A user can access a page if:
They are logged in AND
They are either an admin OR a premium user
Given isLoggedIn, isAdmin, isPremium, determine access.
*/

let isLoggedIn2 = true;
let isAdmin = false;
let isPremium = true;

if (isLoggedIn2 && (isAdmin || isPremium)) {
    console.log("Can Access");
} else {
    console.log("Can not Access");
}

/*
Form Validation-
A form is valid if:
Username is not empty
Password length is at least 6 characters
Terms are accepted (true)
Given variables, return whether the form is valid.
*/

let username = "Coco";
let password2 = "123456";
let termsAccepted = true;
let validForm = (username !== "") && (password2.length >= 6) && (termsAccepted);
console.log(validForm);