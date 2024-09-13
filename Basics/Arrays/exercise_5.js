const numbers = [ 1, 2, 3 ,4, 1, 1];
const counts = countOccurances(numbers, -3);
console.log(counts);

function countOccurances(array, searchElement) {
    // let count = 0;
    // for (let number of array)
    //     if (number === searchElement)
    //         count++;
    // return count;

    const count = array.reduce ((accumulator, currentValue) => {
        if (currentValue === searchElement)
            accumulator += 1;

        return accumulator;
    }, 0);

    return count;
}