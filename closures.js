
function m(){
    var b =20;
    function x(){
        var a = 7;
        function y(){
             //closure (x) //in debugger 
            console.log(a,b);//lexcial scope of the parent +local memory
        }
     y();
    }
  x();
    //closure 
    //this is it
}
m();

