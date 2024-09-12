const numbers = [ 1, 2, 3, 4 ];

// Removing element from the end
let last = numbers.pop();
console.log(last);

// Removing element from the beginning
let first = numbers.shift();
console.log(first);

// Removing element from the middle
numbers.splice(0, 1);
console.log(numbers);