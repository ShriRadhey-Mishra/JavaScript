// If the input is divisible by 3 => Fizz
// If the input is divisible by 5 => Buzz
// If the input is divisible by both 3 and 5 => FizzBuzz
// If the input is divisible neither by 3 nor by 5 => input
// If the input is anything other than a number => 'Not a Number'

function fizzBuzz(input){
    if (typeof input === 'number') {
        if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
        else if (input % 3 === 0) return 'Fizz';
        else if (input % 5 === 0) return 'Buzz';
        else return input;
    }

    else return 'Not a Number';
}

const output = fizzBuzz(false);
console.log(output);

