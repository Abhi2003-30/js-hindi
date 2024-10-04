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

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {objs1, objs2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abhi@gmail.com",
    },
    {
        id: 1,
        email: "abhi@gmail.com",
    },
    {
        id: 1,
        email: "abhi@gmail.com",
    },
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.isPrototypeOf('name'));