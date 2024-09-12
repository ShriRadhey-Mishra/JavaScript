const numbers = [ 3, 4 ];

// Insertion at end
numbers.push(5, 6);
console.log(numbers);

// Insertion at beginning
numbers.unshift(1, 2);
console.log(numbers);

// Insertion at middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);