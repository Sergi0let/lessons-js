// 1 створюємо обєкт
// 2 в обєкт пишемо властивості secondPassed: 0, minsPassed: 0
// 3 в обєкті створюємо метод startTimer
// 3.1 який при визові буде запускати за допомогою setInterval
// 3.2 надаємо йому назву timerId для маніпуляцій з ним
// 3.3 створюю перемінні seconds & minutes для подальшої роботи та додавання 0 цифрам до 9.
// 4 в обєкті створюємо метод getTime, який вертає поточний час.
// 5 в обєкті створюємо метод stopTimer, який повинний зупинити відлік.
// 6 при startTimer відлік повинний продовжувати з збереженої точки використовуэмо clearInterval.
// 7. в обєкті створюємо метод resetTimer який скидує на нуль. Можливо через присвоєння 0.4

const timer = {
  secondPassed: 0,
  minsPassed: 0,
  startTimer() {
    const idTimer = setInterval(() => {
      this.secondPassed += 1;
      if (this.secondPassed === 60) {
        this.minsPassed += 1;
        this.secondPassed = 0;
      }
      console.log(this.minsPassed, this.secondPassed);
    }, 1000);
  },
  getTime() {
    const minutes = this.secondPassed.call(this.startTimer);
    const second = this.minsPassed.call(this.startTimer);
    console.log(minutes, second);
  },
};
// return `${this.minsPassed} ${this.secondPassed} `;

// const timerOne = timer.startTimer.bind(timer);
timer.startTimer();
timer.getTime();

/*
const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    console.log(this.firstName, this.lastName);
  },
};

// .bind
const func = user.getFullName.bind(user);
func();
*/
// ------------------------
/*
const userOne = {
  name: 'John',
  sayHi(age, message) {
    console.log(`${message}. I'm ${this.name}. I.m ${age}`);
  },
};
const funcOne = userOne.sayHi;

const anotherName = {
  name: 'Antyan',
};

funcOne.apply(anotherName, [55, 'Hello']);
*/

/*
const callbackPrompt = {
  message: 'Tell me you number',
  showPrompt() {
    const promptNumber = prompt(this.message);
    console.log(promptNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
// callbackPrompt.showPrompt();
callbackPrompt.showDeferredPrompt(1000);
*/
/*
function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const sayHi = () => console.log('hello');
const sum = (a, b) => console.log(a + b);
const user = {
  name: 'Tom',
  sayHi() {
    console.log(`hi, I'm ${this.name}`);
  },
};

const deferredSayHi = defer(sayHi, 2000);
const deferredSum = defer(sum, 2000);
const deferredHi = defer(user.sayHi, 1000);
deferredSayHi();
deferredSum(2, 2);
deferredHi.call({ name: 'bob' });
*/
