const circle = {
    radius: 10,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

circle.radius = 3.14159;
console.log(circle.area);