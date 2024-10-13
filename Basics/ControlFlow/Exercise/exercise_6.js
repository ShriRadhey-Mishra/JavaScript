const array = [1, 2, 3];

console.log(countTruthy(array));

function countTruthy(list) {
    let count = 0;
    for (let item of list) 
        if (item) count++;    
    return count;
}