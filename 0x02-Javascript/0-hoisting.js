function demonstrateHoisting(){
    console.log(myVariable);// output: undefined
    console.log(myFunction);// output: [Function: myFunction]  

    var myVariable = "Hello, hoisting!";

    function myFunction(){
        console.log("I'm a hoisted function!");
    }
    myFunction()
}

demonstrateHoisting()