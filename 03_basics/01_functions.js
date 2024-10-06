function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "Abhi"){
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Abhishek"));
// console.log(loginUserMessage("abhishek"));

function calcuateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calcuateCartPrice(200, 300, 400, 2000));

const user = {
    username: "Abhishek",
    price: 199,
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobject(user)
handleobject({
    username: "abhi",
    price: 399,
})

const myNewArray = [200, 300, 400]

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200, 300, 400]));