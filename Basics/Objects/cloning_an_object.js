const circle = {
    radius: 1,
    draw: function() {
        console.log('draw');
    }
};

// Cloning Method 1: Traditional method
// const another = {};
// for (let keys in circle)
//     another[keys] = circle[keys];
// console.log(another)

// Cloning Method 2: Object.assign()
// const another = Object.assign({}, circle)
// console.log(another);

// Cloning Method 3: Using spread operator
const another = { ...circle };
console.log(another);