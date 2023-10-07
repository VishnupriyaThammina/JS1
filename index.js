
// lets create a closure
// if we had to count how many time the button clicks and increase the count 

function attachEventListeners(){
    let count = 0 ;//using a global varbale is not a good solution so we use closure for data hiding


    document.getElementById('clickMe').addEventListener("click", function xyz() {
    //    alert("hey");
        ++count;
        console.log("button is clicked"+count);
    });
}

attachEventListeners();
