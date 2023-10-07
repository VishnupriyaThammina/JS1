// what is a callback function in javascript
setTimeout(function(){
    console.log("calling the callback function")
},5000);

function x(y){
console.log('x');
y();
}
x(function y(){
console.log("y");
});//you give the responsibility to run y to x

