const numbers = [ 1, 2, 25, 3, 4, 5];
// const numbers = [];
const max = getMax(numbers);
console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    // const output = [ ...array ];
    // output.sort();

    // return output[output.length - 1];
    
    const output = [ ...array ].reduce((accumulator, currentValue) => {
        if (currentValue > accumulator)
            accumulator = currentValue;

        return accumulator
    });

    return output;
}
