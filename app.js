function outer() {
 let outerVariable = "I am outer!";
 
 function inner() {
   console.log(outerVariable);
 }
 
 return inner;
}

let closureFunction = outer();
closureFunction(); // Prints "I am outer!"


function Animal(name) {
 this.name = name;
}

Animal.prototype.sound = function() {
 console.log("Some generic sound");
};

function Dog(name) {
 Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

let myDog = new Dog("Buddy");
myDog.sound(); // Inherits from Animal: "Some generic sound"

// Arrow function
const add = (a, b) => a + b;

// Template literal
let message = `The sum of 5 and 10 is ${add(5, 10)}.`;


// Geolocation API
navigator.geolocation.getCurrentPosition(
 position => console.log("Latitude:", position.coords.latitude),
 error => console.error("Error getting location:", error)
 );

 function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = function() {
  console.log("Some generic sound");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

let myDog = new Dog("Buddy");
myDog.sound(); // Inherits from Animal: "Some generic sound"

