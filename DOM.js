// 1.index.html: inline js
//2. try this js file 
alert('Welcome to my app');

window.onload = () => {
    const mainHeading = document.createElement("h1");
    const headingText = document.createTextNode("Hello dynamic world!");
    // appendChild()metho adds node to the end of the list of children of specified parent node.
    mainHeading.appendChild(headingText);
    document.body.appendChild(headingText);
    console.log(mainHeading);
    console.log(headingText);

    // display html
    document.getElementById("app").innerHTML = "Hello from Dom element";

    // target HTML element
    const helloElem = document.getElementById("hello"); //target by id
    helloElem.style.color = 'red'; // access the element's css style through the style property
    const campusesContainer = document.getElementById("Univerties") //get it by id
    const americaUniverties = campusesContainer.getElementsByTagName("li");

    // iterate theough the returned collection w/for loop
    for (let i = 0; i < campusesContainer.clientHeight; i++) {
        //s americaUniverties[i].style.backgroundColor = "red";
    }

    // form: common example is listening for button click
    const button = document.getElementById('my-input-button');
    button.onclick = (event) => {
        event.preventDefault();
        MyApp.sayHello("world");
    };
};


const MyApp = {};

MyApp.sayHello = (name) => {
    console.log("Hello " + name);
}