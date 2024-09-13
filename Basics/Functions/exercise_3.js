try {
    const numbers = [ 1, 2, 3 ,4, 1, 1];
    const counts = countOccurances(true, 1);
    console.log(counts);
} catch (e) {
    console.log(e.message)
}

function countOccurances(array, searchElement) {
    if(!Array.isArray(array))
        throw new Error('Invalid Input.');
    const count = array.reduce ((accumulator, currentValue) => {
        if (currentValue === searchElement)
            accumulator += 1;

        return accumulator;
    }, 0);

    return count;
}