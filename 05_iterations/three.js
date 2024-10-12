//  for loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World"
for (const i of greetings) {
    // console.log(`Each char is ${i}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "united state of america")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFG',
    'game2': 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }