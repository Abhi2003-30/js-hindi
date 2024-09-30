// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let myCretedDate = new Date(2025, 0, 30, 12, 0)
let myCretedDate = new Date("2024-01-30")
// console.log(myCretedDate.toDateString());
// console.log(myCretedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCretedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`
newDate.toLocaleString('default', {
    weekday: "long",
})