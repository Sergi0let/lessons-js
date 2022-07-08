// input: arguments (name, age) === (String, number)
// output: age > 0,

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty(name = '', age = null) {
    return { name, age };
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    if (age < 0) {
      return false;
    }
    this.age = age;
    if (this.age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }
    return this.age;
  }
}

// data-test
console.log('--------user2-------');

const user1 = new User('Vasia', 39);
console.log(user1); // {name: 'Vasia', age: 39}

console.log(user1.sayHi()); // Hi, I am Vasia
console.log(user1.requestNewPhoto()); // New photo request was sent for Vasia
console.log(user1.setAge(-3)); // false;
console.log(user1.setAge(10));
console.log(user1.age); // 10
console.log(user1.setAge(25)); // New photo request was sent for Vasia

const user2 = new User('Freddy', 120);
console.log(user2); // {name: 'Freddy', age: 120}

console.log(user2.sayHi()); // Hi, I am Freddy
console.log('Age Freddy: ', user2.age);
console.log(user2.setAge(-10)); // false;
console.log(user2.setAge(18));
console.log('Age Freddy After setAge(18): ', user2.age);
console.log(user2.setAge(60)); // New photo request was sent for Vasia

console.log('--------static-------');
console.log(User.createEmpty('Tom'));
console.log(User.createEmpty('', 18));
console.log(User.createEmpty());
