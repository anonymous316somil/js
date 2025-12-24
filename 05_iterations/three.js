// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

// for (const element of object) {
// }

for(const num of arr){
    console.log(num); 
}

const greetings = "Hello World"
for(const char of greetings){
    console.log(char);
}

const map = new Map()
map.set('name', 'Bruce')
map.set('age', 30)
map.set('city', 'Gotham')

for(const [key, value] of map){
    console.log(`${key} : ${value}`);
}

