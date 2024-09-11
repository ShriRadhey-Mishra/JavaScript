// Constructor Functions 
// Constructor functions uses PascalNotation

function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    }
}

const circle1 = new Circle(10);
const circle2 = new Circle(20);

circle1.draw();
circle2.draw();
console.log(circle1);
console.log(circle2);
