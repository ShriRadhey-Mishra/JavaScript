const number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

/*
Working of reduce function here:

for the second arguement we have set the value of accumulator,a to 0, qnd the currentValue, c is the first element of the array

a=0, c=1 => a=1
a=1, c=2 => a=3
a=3, c=3 => a=6
a=6, c=4 => a=10
a=10, c=5 => a=15
a=15, c=6 => a=21
a=21, c=7 => a=28
a=28, c=8 => a=36
a=36, c=9 => a=45
a=45, c=10 => a=55
*/ 

const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

/*
Working of reduce function here:

for the second arguement we have not set any value to accumulator,a so, it will take the first element as its value
and take the next element as its currentValue, c.

a=1, c=2 => a=3
a=3, c=3 => a=6
a=6, c=4 => a=10
a=10, c=5 => a=15
a=15, c=6 => a=21
a=21, c=7 => a=28
a=28, c=8 => a=36
a=36, c=9 => a=45
a=45, c=10 => a=55
*/ 

const sum1 = number.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum1);