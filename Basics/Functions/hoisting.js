// run()        // It would give error as this expression has not been declared yet. 
const run = function main() {
    console.log('run');
};

move();     // runs easily as the function declaration, unlike function expressions, get hoisted, meaning the JavaScript Engine by itself moves it to the top.

function move() {
    console.log('move');
}


/*
consider it like this:
    console.log(x);
    let x = 10;
*/