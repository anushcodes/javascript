// Uncomment each version of code to know more about hoisting
console.log("Uncomment each version of code to know more about hoisting")


/*
//Normal ones

var x = 5;
function printName(){
    console.log("Anush");
}

printName();
console.log(x);


//Output

    //Anush
    //5

                        GEC

        phase 1         x:undefined
                        printName: f printName()

        phase 2         x:5
                        printName: f printName()                




*/

/*
printName();
console.log(x);
console.log(printName);

var x = 5;
function printName(){
    console.log("Anush");
}

// Output is 

//  Anush
//  undefined
//  function printName(){
    //console.log("Anush");
//}


GEC

        phase 1         x:undefined
                        printName: f printName()

        phase 2         Screen: Anush
                        Screen: undefined
                        printName: f printName()
                        x:undefined -> 5                console.log(x) will give undefined as the log is invoked before variable updation
                        


*/

/*
printName();
console.log(x);
console.log(printName);


//var x = 5;
function printName(){
    console.log("Anush");
}

// Output is 

//Anush
// x is not defined (Error)



GEC

        phase 1        printName: f printName()

        phase 2         Screen: Anush
                        Screen: x is not defined (error and program exit)

*/


// Hoisting allows us to access variables and functions even before initialization.
// Always draw Execution Context table before analysing outputs.