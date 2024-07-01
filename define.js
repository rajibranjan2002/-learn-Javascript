// Undefined
let x;
console.log(x);  // Outputs: undefined

// Not Defined
console.log(y);  // Throws ReferenceError: y is not defined

//  undefined in obect
let object = {};
console.log(object.property);  // Outputs: undefined

function define() {}
console.log(define());  // Outputs: undefined (functions without a return statement return undefined)

//  variable becoming undefined
let z = 5;
z = undefined;
console.log(z);  // Outputs: undefined