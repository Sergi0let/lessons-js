// function constraction

// функцію конструктор потрібно називати з великої букви.
function User(name, age) {
  this.name = name;
  this.age = age;

  // this.sayHay = function () {
  //   console.log(`Hi, I am ${this.name}`);
  // };
}

// прототип для економії памяті
User.prototype.sayHay = function () {
  console.log(`Hi, I am ${this.name}`);
};

/* створюємо обєкт (екземпляр): оголошуємо перемінну та присвоюємо через ключове слово
new функцію конструктор User з параметрами. */
// 1
const user1 = new User('Tom', 17);
user1.sayHay();
// 2
const user2 = new User('Bob', 21);
user2.sayHay();

console.log(user2.sayHay === user1.sayHay); // false

console.log(user1);
