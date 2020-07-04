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

// Calling Functions
function greeting() {
    console.log("hello there!");
}
greeting(); //hello there!

// often defined as methods on objects.
var person = {
    name: 'David',
    speak: function () {
        console.log('Hello, World')
    }
}
person.speak(); //Hello, World
//TLDR: A function that is a property of an object is called a "method".

// Parameter: are names listed in the function definition, real values passed and recevied by the function
// one parameter
function sayHello(name) {
    console.log('Hello ' + name);
}
sayHello('Mark'); //Hello Mark 

// more than one parameter
function sum(x, y, z) {
    console.log(x + y + z);
}
sum(1, 2, 3); //6  * js loosely typeed so no need type string, numbers to specify the data-type

// Callbacks: a function can be passed as an argumenent to another function
function sayHello(name) {
    return 'hello ' + name;
}

function shout(a, foo) {
    console.log(foo(a));
}

shout('world!', sayHello);
// console prints "hello world!"

// Return Statement
function sum(x, y) {
    return x + y;
}

var z = sum(3, 4); //7

//or pass it to another function:
function sum(x, y) {
    return x + y;
}

function double(z) {
    return z * 2;
}

var num = sum(3, 4) //=> 7
var numDbl = double(num); //=> 14

// This can also be written:
var num = double(sum(3, 4)); //=> 14