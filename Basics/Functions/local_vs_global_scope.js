const color = 'red';

function start() {
    const message = 'hi';
    const color = 'blue';
    console.log(color);
}

function stop() {
    const message = 'bye';
    console.log(color);
}

start();
stop();
console.log(color);
// console.log(message);   // defined locally so it will give error
