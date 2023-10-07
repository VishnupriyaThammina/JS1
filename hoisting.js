// // getName();
// console.log(x);

// var x =   7 ; 
// console.log(getName)
   


function getName(){
    console.log("Hellooo");
}

// kept inside the call stack;
getName();// a brand new execution context is created
// execution context deleted after execution
console.log(getName)