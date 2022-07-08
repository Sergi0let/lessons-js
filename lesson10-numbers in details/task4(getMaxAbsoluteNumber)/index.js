// getMaxAbsoluteNumber
// Знайти найбільше число в мисиві по модулю (Math.abs)

const arr = [2, -6, 78, -99];

// №1------------------------------------
const getMaxAbsoluteNumber = (arr) => {
  let max = -Infinity;

  arr.forEach((num) => {
    if (Math.abs(num) > max) {
      max = Math.abs(num);
    }
  });

  return max;
};

console.log('№1 :', getMaxAbsoluteNumber(arr));

// №2------------------------------------

const getMaxAbsoluteNumber2 = (arr) =>
  Math.max(...arr.map((num) => Math.abs(num)));

console.log('№2 :', getMaxAbsoluteNumber2(arr));
