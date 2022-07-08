// Конструктор объектов - прототипы

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (age) {
  if (age < 0) return false;
  this.age = age;
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return age;
};

const user1 = new User('Sergij', 22);
// user1.sayHi();
// user1.requestNewPhoto();
// console.log(user1.setAge(20));

// console.log(user1.age);

// Объект пользователя

const obj = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

obj.fullName = 'dkd dkd';
console.log(obj.fullName);
