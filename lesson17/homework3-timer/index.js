// let currentTime = 0;
// const timer = {
//   secondsPassed: 0,
//   minsPassed: 0,
//   startTimer() {
//     const intervalId = setInterval(() => {
//       let seconds = this.secondsPassed;
//       let mins = this.minsPassed;
//       seconds += 1;
//       if (seconds === 60) {
//         mins += 1;
//         seconds = 0;
//       }
//       console.log(mins, seconds);
//     }, 1000);
//   },
//   getTime() {
//     return currentTime;
//   },
//   stopTimer() {},
//   resetTimer() {},
// };

// timer.startTimer();

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
  // startTimer
  startTimer() {
    setInterval(() => {
      this.secondPassed += 1;
      console.log(this.secondPassed);
    }, 1000);
  },
  // getTime
  getTime() {
    console.log(this.secondPassed.bind(this.startTimer));
  },
};
