// singleton
// object.create

// object literls

const mySym = Symbol("key1")



const jsUser = {
    name: "Abhishek",
    "full name": "Abhishek Choudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Himachal",
    email: "abhishek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "abhishek@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "abhishek@chatgpt.com"
//console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello js user");    
}
jsUser.greetings2 = function(){
    console.log(`hello js user, ${this.name}`);    
}
console.log(jsUser.greetings());
console.log(jsUser.greetings2());