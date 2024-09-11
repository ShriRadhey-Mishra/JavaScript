// Factory functions creates objects
// Factory functions uses Camel Notations by default

function createCircle(radius) {
    return {
        radius: radius,
        
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(10);
const circle2 = createCircle(20);

console.log(circle1);
console.log(circle2);
