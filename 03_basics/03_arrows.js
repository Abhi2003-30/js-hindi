const user = {
    username: "Abhishek",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Abhi"
// user.welcomeMessage()

// console.log(this);

// function Abhi() {
//     let username = "Abhishek"
//     console.log(this.username);
// }
// Abhi()

// const abhi = function() {
//     let username = "Abhishek"
//     console.log(this.username);
    
// }

 const abhi = () => {
    let username = "Abhishek"
     console.log(this);
    
 }


// abhi()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2
// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "abhishek"})

console.log(addtwo(3, 4));

// const myArray = [1, 2, 3, 4, 5]

// myArray.forEach()