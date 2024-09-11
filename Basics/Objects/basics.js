// Object Oriented Programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

console.log(circle.radius);
console.log(circle.location.x);
console.log(circle.location.y);
console.log(circle.isVisible);
circle.draw(); // Method