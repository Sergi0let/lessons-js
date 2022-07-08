// event (this in arrow functions)

const obj = {
  name: 'Tom',
  sayHi() {
    console.log(this.name);
  },
};

// obj.sayHi();

/*
// з СТРІЛОЧНОЮ ФУНКІЄЮ
setTimeout(() => obj.sayHi, 1000);
const event = {
  guests: [
    { name: 'Tom', email: 'a@gmail.com', age: 17 },
    { name: 'Bob', email: 'a@gmail.com', age: 18 },
  ],
  message: 'Welcome to the party',
  getInventation() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        text: `Hi ${name}. ${this.message}`,
        email,
      }));
  },
};

console.log(event.getInventation());
*/

/*
// без стрілочної функції event потрібно вказувати обєкт на який зсилаєтся
setTimeout(() => obj.sayHi, 1000);
const event = {
  guests: [
    { name: 'Tom', email: 'a@gmail.com', age: 17 },
    { name: 'Bob', email: 'a@gmail.com', age: 18 },
  ],
  message: 'Welcome to the party',
  getInventation() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(function ({ name, email }) {
        console.log(this);
        return { text: `Hi ${name}. ${this.message}`, email };
      }, event);
  },
};
console.log(event.getInventation());
*/

// const fn = obj.sayHi;

// fn();

// console.log(this);

// function fn1() {
//   console.log(this);
// }
// fn1();

// var a = 1;
// console.log(window.a); // get 1 on global
/*
// better
window.user = {
  name:
  id
};
*/

// let b = 1;
// console.log(window.b); // undefinite
