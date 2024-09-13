// for numbers and strings etc.

const numbers = [5, 2, 4, 1, 3];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// for arrays containing objects,

const courses = [
    { id: 1, name: 'Node.js' }, 
    { id: 2, name: 'Javascript' }
];

courses.sort((a, b) => {
    // a > b: 1
    // a < b: -1
    // a === b: 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA > nameB) return 1;
    if(nameA < nameB) return -1;
    return 0;
});

console.log(courses);