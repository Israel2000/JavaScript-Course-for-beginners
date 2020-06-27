// this page belong to conditional js only

if (1 > 0) {
    console.log("yes, I knew it.");
}

if (0 > 1) {
    console.log("not true");
} else {
    console.log("you are correct");
}

// testing more than one case
let name = "kittens";
if (name === 'puppies') {
    name += '!';
} else if (name === "kittens") {
    name += "!!";
} else {
    name = "!" + name;
}
console.log(name === "kittens!!"); //true

// Ternary Operators conditions
let age = 14;
let allowed = (age > 18) ? "yes" : "no"; //undefined
console.log(allowed); //no

// Block Scope : let variable created inside a block scope
let name = "Jerry";
if (1 > 0) {
    name = "jay";
}
console.log(name);

// why this code different that the following
if (1 > 0) {
    let otherName = "everyday code";
}
console.log(anotherName); // ReferenceError: otherName is not defined

// Comparison Operators
3 > 2 //true
"b" > "a" //true
"A" > "a" // true
12 > "12" // false
12 >= "12" // true

//double equal == checks for type coercion
// triple equal === cheks types and 
// ==
"dog" == "dog"; //true
1 == true; // true

// ===
1 === true; //false
2 === "2"; //false
true === true; //true

// however there are other situations like empty objects or arrays invloved...
{ } === {}; //false
[] === []; //false
[1, 7] === [1, 7]; // false

// != and !==  the oppsite of == and ===
1 !== 3; // true
"hello" !== 'helloo'; // true
1 !== '1'; //true
1 != "false"; //false

// Boolean and Logic Operator: &&(AND) -both side values to true/ ||(OR) operator - both side true in order value to be true
true && true // true
false && false //false
true || false //true
false || flase //false

// example || (OR)
let hour = 9;
if (hour < 10 || hour > 18) {
    console.log('The office is closed.');
}

//example && (AND)
let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
    console.log('The time is 12:30');
}

// Swtich Statement
let grade = 'B';
switch (grade) {
    case 'A':
        console.log('Excellent job');
    case 'B':
        console.log('Good job');
    case 'C':
        console.log('okay job');
    case 'D':
        console.log('Not so good job');
    case 'F':
        console.log('Bad job');
    default:
        console.log('Unexpected grade value entered');
}

// break;

// Iteration
let countNums = [1, 2, 3, 4, 5];
for (let i = 0; i < countNums.length; i++) {
    console.log(i);
}
