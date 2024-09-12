const first_primitive = [ 1, 2, 3 ];
const first_reference = [ { id: 1 } ];

const second = [ 4, 5, 6 ];

const combined_primitive = first_primitive.concat(second);
const combined_reference = first_reference.concat(second)
combined_reference[0].id = 10;

const slice_primitive = combined_primitive.slice(3, 5);
const slice_reference = combined_reference.slice(0, 1);

console.log(combined_primitive);
console.log(combined_reference);

console.log(slice_primitive);
console.log(slice_reference);
