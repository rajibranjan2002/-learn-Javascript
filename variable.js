console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 1;

{
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 2;
}

console.log(c); // ReferenceError: c is not defined
const c = 3;

{
  const d = 4;
  d = 5; // Throws TypeError: Assignment to a constant variable
}

console.log(e); // Outputs: undefined (hoisting of var)
var e = 6;