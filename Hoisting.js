// Hoisting

console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5

sayHello(); // Outputs: "Hello!"

function sayHello() {
  console.log("Hello!");
}

sayGoodbye(); // Throws TypeError: sayGoodbye is not a function
var sayGoodbye = function() {
  console.log("Goodbye!");
};

console.log(y); // Throws ReferenceError: Cannot access 'y' before initialization
let y = 10;