// OTBO data stored and how its accessed :-

// *******************Primitive DataTypes******************* -> call by value
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. BigInt
// 7. Symbol

const score = 100; // Javascript is dynamically typed language whereas Typescript is statically typed language.
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // by default initialized with undefined

const id = Symbol("12345");
const anotherId = Symbol("12345");
// console.log(id === anotherId);

const bigNumber =
  45235432523525243532453456434564363453453242423423534645643534234234363453475487567n;
// console.log(bigNumber);

// *******************Non-Primitive DataTypes******************* -> call by reference
// 1. Array
// 2. Objects
// 3. Functions

const heroes = ["shaktiman", "naagraj", "doga", "hanuman"];
// console.log(heroes);

const user = {
  name: "bob",
  age: 22,
  state: "Goa",
};
// console.log(user);

const myFunction = function () {
  console.log("Hello World");
};

// console.log(typeof myFunction);
// console.log(typeof heroes);
// console.log(typeof user);

// console.log(typeof scoreValue);
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive) 

let myYtName = "somildotcom"

let anotherName = myYtName
anotherName = "coffeedotcom"

console.log(myYtName);
console.log(anotherName);

let user1 = {
    email: "user1@google.com",
    upi: "user1@ybl"
}

let user2 = user1

user2.email = "user2@gmail.com"
console.log(user1.email); 
console.log(user2.email); 