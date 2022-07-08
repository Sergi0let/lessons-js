// Контекст выполнения функции 1
const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Привязка контекста 2
const callbackPrompt = {
  message: 'Tell me you number please ?',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

// Переадресация вызова  3
function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

// Полное имя 7
const userV1 = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(namefull) {
    const [name, surname] = namefull.split(' ');
    this.firstName = name;
    this.lastName = surname;
  },
};

/* ===> 1 <=== */
const student = {
  name: 'Tom',
};

function sayName() {
  console.log(this.name);
}

/*
 * создайте ф-цию sayStudentName которая будет выводить в консоль имя студента 'Tom'
 * используйте .bind и ф-цию sayName
 */
// const sayStudentName = sayName.bind(student);
/*
 * создайте ф-цию sayBruceName которая будет выводить в консоль имя 'Bruce'
 * используйте ф-цию sayName и .bind с нужным объектом
 */
const sayBruceName = sayName.bind({ name: 'Bruce' });
// sayBruceName();

/* ===> 2 <=== */
const company = {
  companyName: 'Microsoft',
};

function greeting(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

/*
 * создайте ф-цию specialGreeting которая будет выводить в консоль
 * 'Hello, Bob Marley. Welcome to the Microsoft`
 * используйте ф-цию greeting и .bind с нужным объектом и аргументами
 * specialGreeting не должна принимать ни одного аргумента
 */
const specialGreeting = greeting.bind(company, 'Bob', 'Marley');
// specialGreeting();

/* ===> 3 <=== */
const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv',
};

function getPopulation(population) {
  console.log(`Population in ${this.countryName} is ${population}`);
}

/*
 * создайте ф-цию getUkrainePopulation которая будет возвращать строку
 * 'Population in Ukraine is 43000`
 * 43000 передавайте в виде числа
 * используйте ф-цию getPopulation и .bind с нужным объектом и аргументами
 * getUkrainePopulation не должна принимать ни одного аргумента
 */
const getUkrainePopulation = getPopulation.bind(country, 43000);
// getUkrainePopulation();

/* ===> 4 <=== */
const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
    console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
  },
};

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};

// .bind в действии
function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

const multiplier = calculator.bind({ operation: '*' });

const summator = calculator.bind({ operation: '+' });

const twice = calculator.bind({ operation: '*' }, 2);

// Функция bind

const bind =
  (fn, context, ...boundArgs) =>
  (...args) =>
    fn.apply(context, [...boundArgs, ...args]);

// Пример:
function greeting(greeting, punctuation) {
  return `${greeting} ${this.userName}${punctuation}`;
}

const alex = { userName: 'Alex' };
const alexBound = bind(greeting, alex);

// console.log(alexBound('Hello', '!')); // 'Hello Alex!'
