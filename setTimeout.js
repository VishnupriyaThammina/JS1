function x(){

    var i = 'prints after 0 second';
    setTimeout((function(){
        console.log(i);
    }),3000);
    console.log(i);
     i = 'prints after 3 second';

}
x();