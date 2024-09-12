const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

const course = courses.find(function(course) {
    return course.name === 'a';
});

const course1 = courses.find(function(course) {
    return course.name === 'ab';
});

const course2 = courses.findIndex(function(course) {
    return course.name === 'b';
});

const course3 = courses.findIndex(function(course) {
    return course.name === 'ab';
});

console.log(course);
console.log(course1);
console.log(course2);
console.log(course3);