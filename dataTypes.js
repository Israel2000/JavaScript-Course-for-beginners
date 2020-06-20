/**** this is file is belong to 
 * introduction file of JavaScript ***/

// part 1: Data types typeof( ) -> in the terminal
typeof (37) === 'number';

typeof ({}) === 'object';

typeof ('hi there') === 'string';

// part 2: Numbers (whole numbers): 
/*integers: */-1, 0, 1, 2
/*Floats(decimal numbers): */ 2.12, 3.14

// part 3: Aritmetic Operation
1 + 2 //=> 3

// part 4: Special Number Operators
//3 ^ 2 becomes
Math.pow(3, 2)  //9
// square root
Math.sqrt(4)  //2
//Random decimal number
Math.random() // 0.229375
Math.random(10) //??
// to delete


// string
var string = "this is string"; //or ''

// variables and keyword => let & const ES6
let x = 1;
const y = 100;

var a; //undefined

var name = "Alex"; // undefine but type:name =>Alex

// Assignment Operator
var x = 1; //=>1

// += increaments -= decrement
x += 5 //=>

// Arrays
var friends = ['Moe', 'Larry', 'Curly'];
//=> 'Moe', 'Larry', 'Curly'

//prints out first 
firstFriend = friends[0]; //=> 'Moe'

// print out last
var lastFriend = friends[2]; //=> 'Curly'   

// Array
var a = ['dog', 'cat', 'chicken'];
a.length; //=> 3
// edit elements
a[0] = 'cow'; //console.log(a) => ["cow", "cat", "chicken"]

// accessing array
var goods = ["tea", "milk"];
var quantity = [8, 2];

// adding element to arrays
goods[2] = "coffee";
quantity.push(8);

// assessing elemtn from string template
console.log(`Today, I consumed ${quantity[0]} cups of ${goods[0]}`);
console.log(`I am going to have a ${goods} in the morning.`);

/* HomeWork:
    Print how much coffee will be consume tonight.

*/

// Array helper methods => .pop, .push, .reverse, .shift, .unshift
var message = [];
// push
message.push(8, 1, 3, 54); //1
message.push('h', 'e', 'l', 'l', 'o');
// pop
message.pop() // removes last element
message.shift() // removes first element
message.unshift(1) // adds into first element

// reversal and join methods
message.reverse();
message.join()
message.join(' '); // removes quoates

// Iterating through an Array
var teams = ['Lakers', 'Dodgers', 'Yankees', 'Heat'];
for (var i = 0; i < teams.length; i++) {
    console.log(teams[i]);
}
// what's the difference b/n top one and this
for (var i = 2; i < teams.length; i++) {
    console.log(teams[i]);
}

// High Methods orders: .forEach, .fiter(), .reduce()
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
teams.forEach(function (el) {
    console.log(el);
});

// Array.map => create a new array with the results of calling a provided function on the every element //in the array.
var evens = [];
evens.push(2, 4, 6, 8);

var timesFive = evens.map(function (num) {
    return num * 5;
})  // undefined
console.log(timesFive);

// filter, 
// reduce
// every
// some()

// HOME WORK: Week 2