const numbers = [ 1, 2, 3, 4 ];

console.log(includes(numbers, 4));

function includes(array, searchElement) {
    for (let item of array)
        if (item === searchElement)
            return true;

    return false;
}