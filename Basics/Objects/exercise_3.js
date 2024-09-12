function Address(district, city, zipCode) {
    this.district = district;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = new Address('Kankhal', 'Haridwar', 249408);
const address2 = new Address('Kankhal', 'Haridwar', 249408);
const address3 = address1;

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

function areEqual(obj1, obj2) {
    return address1.district === address2.district && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

function areSame(obj1, obj2) {
    if (obj1 === obj2)
        return true

    return false
}