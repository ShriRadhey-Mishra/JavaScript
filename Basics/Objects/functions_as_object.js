function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);
console.log(Circle.name);   // returns the name of the function
console.log(Circle.length); // returns the number of arguments
console.log(Circle.constructor) // Returns the constructor that was used to create this function object

// Creating new object using the parent constructor Function()
const Circle1 = new Function('radius', 
    `this.radius = radius;
     this.draw = function() {
         console.log('draw');
    }`);

const newCircle = new Circle1(100);

console.log(newCircle);

Circle.call({}, 1); // This is logically reuivalent to line 8 code. 
Circle.apply({}, [1, 2, 3]); // This is same as call function but it has and array for multiple arguments.