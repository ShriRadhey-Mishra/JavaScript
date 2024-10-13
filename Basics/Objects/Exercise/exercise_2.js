function address(district, city, zipCode) {
    return {
        district,
        city,
        zipCode
    };
}

const address1 = address('Kankhal', 'Haridwar', 249408)
console.log(address1);

function Address(district, city, zipCode) {
    this.district = district;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address('Kankhal', 'Haridwar', 249408);
console.log(address2);