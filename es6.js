/*
  Only ES6 knowlege goes here!
*/
// Global Scope
// example 1: var 
{
    var x = 2;
}
console.log(x);
{
    let y = 10;
}
console.log(y);

//example 1
var x = 'global';
let y = 'global';
const z = 'global';

console.log(this.x);
console.log(this.y); //globaly 'let' doesnt create not create a property object
console.log(this.z); // same thing with 'const'

//example 2: let
let x = 1;
if (x === 1) {
    let x = 2;
    console.log(x); //2
}
console.log(1); //1

// example 3 : let
function varTest() {
    var x = 1;
    {
        var x = 2;  // same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

function letTest() {
    let x = 1;
    {
        let x = 2;  // different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

// example 1: const
const myFavCar = "BMW";
// myFavCar = "Volvo"; //will throw an error:-> can't re assign

console.log('my favorite car is: ' + myFavCar);

// retrying to redeclare a constant throws an error
const myFavCar = "volvo";

// example 2: const  - initializer 
const foo; // wouldnt work
