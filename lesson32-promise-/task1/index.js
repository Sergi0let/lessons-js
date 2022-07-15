// asyncSum(asyncNum1, asyncNum2, ...)

// const p = new Promise();

// --------------Promise.resolve(value)
/*
const resolvedPromise = Promise.resolve(17);
const resolvedPromise2 = Promise.resolve(resolve => resolve(17));
*/
// --------------Promise.reject(value)
/*
const rejectPromise = Promise.reject(new Error('error'));
const rejectPromise2 = new Promise((_, reject) => reject(new Error('error')));
*/

// Асинхроний суматор в якого передають проміси з числами. Він їх збирає та видає проміс з значенням
// Promise.all asyncSum(asyncNum1, asyncNum2, ...)

const getValueWithDelay = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });
const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay('10', 3000);

const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers).then(numbers => getSum(numbers));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3).then(sum => console.log(sum));
