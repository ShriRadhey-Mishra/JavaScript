// Value Types: Number, String, Boolean, Symbol, Undefined, Null 
// Reference Types: Object, Function, Array

// Example for value type: Here the value of x was given to y, so when we changed the value of x, the value of y didn't changed.
let x = 10;
let y = x;
x = 20;
console.log(x, y);

// Example for Reference Type: Here the value of b changed as we changed the value of a. This is because instead of giving the 
// value of a to b, a reference was provided to b. Now when we changed the object at that reference, it was also reflected on b.

let a = { value: 10 };
let b = a;
a.value = 20;

console.log(a, b);