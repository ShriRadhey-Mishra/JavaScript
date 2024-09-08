let person = {
    name: 'Anjali',
    age: 17
};

console.log(person);

// Accessing keys
// Dot Notation:
person.name = "Radhey";
person.age = 20;
console.log(person.name);
console.log(person.age);

// Bracket Notation:
let firstProperty = 'name';
let secondProperty = 'age';

person[firstProperty] = "Anjali Bhardwaj";
person[secondProperty] = 17;
console.log(person[firstProperty]);
console.log(person[secondProperty]);