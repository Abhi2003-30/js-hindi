// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Abhishek"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abhishek@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Abhishek",
            lastname: "Choudhary",
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname);

const objs1 = {1: "a", 2: "b"}
const objs2 = {3: "c", 4: "d"}

const obj3 = {objs1, objs2}
console.log(obj3);
