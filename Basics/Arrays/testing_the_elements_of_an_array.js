const positiveNumbers = [ 1, 2, 3, 4 ];
const somePositiveNumbers = [ 1, -1, 2, 3, 4 ];

// every(): Takes a callback function which chekcs a condition for every elements of the array. If all the elements passes
//  the condition, then it return true, otherwise false. 
const allPositiveInPositiveNumbers = positiveNumbers.every(value => {
    return value>=0;
});

const allPositiveInSomePositiveNumbers = somePositiveNumbers.every(value => {
    return value>=0;
});

console.log(allPositiveInPositiveNumbers);
console.log(allPositiveInSomePositiveNumbers);

// some(): Takes a callback function which chekcs a condition for every elements of the array. If at least one the elements
//  passes the condition, then it return true, otherwise false. Also, if the very first element passes the condition, then it stops and returns true.

const somePositiveInPositiveNumbers = positiveNumbers.some(value => {
    return value>=0;
});

const somePositiveInSomePositiveNumbers = somePositiveNumbers.some(value => {
    return value>=0;
});

console.log(somePositiveInPositiveNumbers);
console.log(somePositiveInSomePositiveNumbers)
