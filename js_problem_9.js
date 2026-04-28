/*
Create an object called student with properties: name, age, and grade.
Print the name and grade
*/

let student = {
    name: "DonKali",
    age: 15,
    grade: "A",
}
console.log(student.name);
console.log(student.grade); 

/*
Given an object:
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
Access and print brand using dot notation
Access and print model using bracket notation
*/

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};
console.log(car.brand); // dot notation
console.log(car["model"]); // bracket notation

/*
Create an object book with title, author, and price.
Change the price
Add a new property pages
Print the updated object
*/

let book = {
    title: "How to update life",
    author: "Abid hasan",
    price: 599,
}

book.price = 650;
book.pages = 600;
console.log(book);

/*
Create an object person with properties name and age.
Add a method introduce() that returns:
"Hi, I am [name] and I am [age] years old"
Use this keyword inside the method
*/

let person = {
    name: "John Dee",
    age: 54,
    introduce: function() {
        return "Hi, I am " + this.name + " and I am " + this.age + " years old."
    }
};
console.log(person.introduce());

/*
Create an array of objects where each object represents a product with name and price.-
Print all product names
Increase the price of each product by 10
Print the updated array
*/

let products = [
    {name: "pen", price: 5} ,
    {name: "book", price: 150 },
    {name: "bag", price: 500 }
];

products.forEach(function(product){
    console.log(product.name);
});

products.forEach(function(product){
product.price += 10;
});
console.log(products);