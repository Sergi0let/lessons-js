const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    // get == getter
    return `${this.firstName} ${this.lastName}`;
  },
  getfullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

user.getfullName = 'Tom Hardy';
console.log(user.getfullName);
