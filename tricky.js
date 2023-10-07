function x(){
    for(var  i = 1 ; i<=5;i++){
        var a = 0;

        setTimeout(function(){
            a++;

            console.log(a);
        },i*1000);
    }
}
// x();
function z(){
    for(let i = 1  ; i<=5;i++){
        setTimeout(function(){
           

            console.log(i);
        },i*1000);
    }
}
// z();

// most efficient way 
function timer(){
    for(var i =1; i<=5;i++){
        function close(x){
            setTimeout(function(){
console.log(x);
            },i*1000);
        }
        close(i);
    }
}