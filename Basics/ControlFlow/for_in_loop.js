// It is used to iterate over the properties of an object.

let person = {
    name: 'Anjali',
    age: 18
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

let colors = ['red', 'green', 'blue'];

for (let index in colors) {          // It gives index here
    console.log(index, colors[index]);
}