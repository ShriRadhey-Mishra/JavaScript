const address = {
    district: 'Kankhal',
    city: 'Haridwar',
    zipCode: 249408,
}

showAddress(address);

function showAddress(obj) {
    for (let keys in address)
        console.log(keys, obj[keys]);
}