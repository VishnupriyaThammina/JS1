//function statement
a();
// b(); only memory is assigned initially undefined 
function a(){
console.log("Function statement ")
}//this way of creating a function is called function statement

//function expression

var b = function(){
    console.log("Function expression")
}
b();


// a function statement and declaration are both the same

//anonymous functions
// function(){

// }
// function statements always require a name
//a fucntion with no name is called anonymous function
//generally this is a sysntax error
//but it can be used as a value 
//i.e
var c = function(){
    console.log("this is an anonymous function");
}
c();
//this is how anonymous functions are used


//named function expression
c = function d(){
    console.log("this is an named function expression");

}
c();
// d();// this is an error
var d = function(param1,param2){// parameters
    console.log("d is called");
    return function(){

    }
}

d(1,20);//arguments

//first class functions
// functions inside another functions as arguments
d(function(){},function(){});
function xyz(){

}
console.log(d(xyz));
// the ability to use functions as values is called as first class funcitons
// that meants i can send them as arguments or even return a function in java script