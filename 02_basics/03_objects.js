// singleton 
// Object.create 

const mySym = Symbol("key1");
// object literals
const JsUser = {
    name: "somil",
    "full name": "somil is somil",
    mySym: mySym,
    age: 20,
    city: "Mumbai",
    email: "somil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "s@somil.com"; 
// Object.freeze(JsUser); // freeze the object - no changes allowed
JsUser.email = "s@anshu.com"; // will not work
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
