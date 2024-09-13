// Function declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expression
const run = function() {
    console.log('run');
};

// Named Function Expression
const fastRun = function sprint() {
    console.log('sprint');
};

let move = run;

walk();
run();
fastRun();
move();