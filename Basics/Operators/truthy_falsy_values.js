console.log("false || true = ", (false||true));
console.log("false || \"Anjali\" = ", (false||"Anjali"));
console.log("false || 1 = ", (false||1));

// Falsy Values (acting false values) includes undefined, null, 0, false, '', NaN
// Anything that is not Falsy -> Truthy Value

// Short-Curcuiting, here only first logical operation is performed killing the other operations in front.
console.log("false || 1 || 2 =", (false || 1 || 2));

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);