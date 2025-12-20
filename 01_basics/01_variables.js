const accountId = 1445534321
let accountEmail = "s@somil.com"
var accountPassword = "321123"
accountCity = "Shimla"
let accountState; 

// accountId = 2 // not allowed 

accountEmail = "a@anshu.com"
accountPassword = "323232"
accountCity = "Mumbai"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

