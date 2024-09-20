// Primitive
// 7 types : String, Number, Boolean, Null, Undifined, Symbol, BigInt

const score = 100
const scoreValue = 13.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol(`123`)
const anotherId = Symbol(`123`)

console.log(id === anotherId);

//const bigNumber = 6565665659565965n


// Refrence  (non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
    name: "Abhishek Choudhary",
    age: 21,
}


const myfunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
