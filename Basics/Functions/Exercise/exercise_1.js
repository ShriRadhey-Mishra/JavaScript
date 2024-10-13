function sum(...values){
    if (values.length === 1 && Array.isArray(values[0]))
        values = [...values[0]];
    return values.reduce((a, b) => a + b);
}

console.log(sum([1,2,3,4]));