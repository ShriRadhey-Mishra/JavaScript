const numbers = [ 1, -1, 2, 3 ];

const items = numbers
                .filter( value => value>=0 )
                .map( value => ({ value }))
                .filter( object => object.value>1)
                .map( obj => obj.value );

console.log(items);
console.log(numbers);