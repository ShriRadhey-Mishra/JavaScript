function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);
console.log(Circle.name);   // returns the name of the function
console.log(Circle.length); // returns the number of arguments
console.log(Circle.constructor) // 