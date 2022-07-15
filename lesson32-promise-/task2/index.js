// Promise.allSettled ------------ asyncSum(asyncNum1, asyncNum2, ...)

const getValueWithDelay = (value, delay) =>
  new Promise(resorve => {
    setTimeout(() => {
      console.log(value);
      resorve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(undefined, 2000);
const asyncNum3 = getValueWithDelay('10', 3000);

const asyncSum = (...asyncNumbers) => {
  return Promise.allSettled(asyncNumbers).then(numbers => numbers);
};

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3).then(sum => console.log(sum));
