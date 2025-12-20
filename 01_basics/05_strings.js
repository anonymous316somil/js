const name = "somil";
const repoCount = 32;
console.log(name + repoCount + "Value");

// String Interpolation 
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String('somil-sv-community');
console.log(gameName); 
// console.log(gameName[0]); 
// console.log(gameName.__proto__); 

// console.log(gameName.length); 
// console.log(gameName.toUpperCase()); 
// console.log(gameName.charAt(9));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(4,7); 
console.log(newString); 

const anotherString = gameName.slice(-7, -4); 
console.log(anotherString);

const newStringOne = "    somil    "; 
console.log(newStringOne); 
console.log(newStringOne.trim()); 

const url = "somil.com/learn-js/somil%20js";
console.log(url.replace("%20", "-"));

console.log(url.includes("learn")); 

const myName = "soMil"
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

console.log(gameName.split('-'));