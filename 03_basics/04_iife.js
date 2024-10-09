// Immediately Invoked Function Expressions (IIFE)

(function abhi(){
    // named IIFE
console.log(`DB CONNECTED`);    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);    
    })('Abhishek')

 function abhishek(){
    console.log(`DB CONNECTED THREE`);     
 } 
 abhishek()
 