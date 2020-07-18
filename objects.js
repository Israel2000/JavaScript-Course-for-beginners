/* In this lesson we will identify objects, attributes and methods in real scenarios
- create a constructor for JS object
- write prototype method for js object
*/
// Two main way creating objects:
// 
let myFavCities = {};

let myCar = new Object();

let myMotorcycle = {
    wheels: 2,
    color: "lakers gold",
    maxSpeed: 250,
    owners: ["Mr.Bean", "Jean"]
}

//access the object
myMotorcycle.wheels; //2
myMotorcycle.maxSpeed; //250

// we can get and set object prop w/ dot notation(.) or square brackets[]
myFavCities.losAngeles = 4;
myFavCities.ocean = "venice Beach, Santa Monica";

// []
myCar["num-of-wheels"];


//sometimes we create object in certin type is with function called constructor. when its called js does some magic under the hood for you.

//create instance of "Place" class
let Place = function () { };

// similar way of our object example
let london = new Place();
let newYork = new Place();

// constructor is called at the momement that our new object is istantiated. Often constructor is used to set the object's properties or to call methods for object to use.

let Places = function () {
    console.log('Places instance created');
};

let london = new Places(); // console.log "Places instace created"
let newYork = new Places(); // console.log "Places instace created"


//Properties can be set in the constructor, so they are set specifically for each instance. This simply means that we pass them as parameters in our constructor function.
// this - properties
let Places = function (placeName, nickName) {
    this.placeName = placeName;
    this.nickName = nickName;
    console.log('Places instantiated');
}
let nicePlace = new Places('london', 'nice place');
console.log(nicePlace.placeName + ' is ' + nicePlace.nickName);

//Methods are functions grouped together in our objects.We can call our object methods the same way we call our object properties through the dot notation, with the main difference being that we add() at the end of our statement.

let Places = function (placeName, nickName) {
    this.placeName = placeName;
    this.nickName = nickName;

    // method
    this.identity = function () {
        console.log(this.placeName + ' is ' + this.Places)
    }
    console.log('Places instantiated');
};

//To define a method in one place, thus minimizing bugs, and saving memory, we assign a function to a named property of the class's prototype.

Places.prototype.identity = function () {
    console.log(this.placeName + ' is ' + this.nickName);
}

let nicePlace = new Places('London', 'New York');
nicePlace.identity();