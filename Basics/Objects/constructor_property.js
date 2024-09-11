// Using Factory Function
function createCircle(radius) {
    return {
        radius: radius,
        
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(10);

// Using Constructor Function
function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('draw');
    }
}

const circle2 = new Circle(20);

// checking the constructor property of objects.
console.log(circle1.constructor);
console.log(circle2.constructor);