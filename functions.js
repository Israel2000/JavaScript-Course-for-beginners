/* our last lessons: conditions and loops
 use boolean logic like (||, &&, !) to combine and manipulate conditions
*/
// what is function? => reusable statement, reusable anywhere.

//function declaration
sayHello('hello world!')
function sayHello(word) {
    console.log(word);
}

// function expression
sayHello('hello world!')
var sayHello = (word) => {
    console.log(word); // // RESULTS IN ERROR:
    // TypeError: undefined is not a function
}