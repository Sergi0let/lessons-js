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

// export const timer = {
//   secondPassed: 0,
//   minsPassed: 0,
//   startTimer() {
//     const idTimer = setInterval(() => {
//       this.secondPassed += 1;
//       if (this.secondPassed === 60) {
//         this.minsPassed += 1;
//         this.secondPassed = 0;
//       }
//       console.log(this.minsPassed, this.secondPassed);
//       return this;
//     }, 1000);
//   },
//   getTime() {
//     let minutes = this.minsPassed;
//     let seconds = this.secondPassed;
//     if (minutes <= 9) minutes = '0' + minutes;
//     if (seconds <= 9) seconds = '0' + seconds;

//     return `${minutes}:${seconds} `;
//   },

//   stopTime() {
//     this.secondPassed = this.startTimer();
//   },
// };

// timer.startTimer();
// timer.getTime();
const timer = {
  secondPassed: 0,
  minsPassed: 0,
  startTimer() {
    setInterval(() => {
      this.secondPassed += 1;
      console.log(this.secondPassed);
      return this;
    }, 1000);
  },
  getTime() {
    console.log('time', this.secondPassed);
    return this.secondPassed;
  },
};

timer.startTimer();
timer.getTime();
