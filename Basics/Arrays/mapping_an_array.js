const numbers = [ 1, -1, 2, 3 ];

const items = numbers
                .filter( value => value>=0 )
                .map( value => ({ value }));

console.log(items);