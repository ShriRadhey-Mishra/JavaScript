const person = {
    firstName: 'Shri Radhey',
    lastName: 'Mishra',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Anjali Bharadwaj';
console.log(person);