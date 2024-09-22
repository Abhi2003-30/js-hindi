const name = "abhishek"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String(`abhishek-ac`)

// console.log(gameName[5]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf(`i`));

const newstring = gameName.substring(0,4)
//console.log(newstring);

const anotherString = gameName.slice(-8,4)
//console.log(anotherString);

const newStringOne = " Abhishek "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20choudhary"
console.log(url.replace(`%20`, `-`));
console.log(url.includes(`abhishek`));

console.log(gameName.split(`-`));
