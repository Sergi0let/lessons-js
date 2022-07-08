const arrayNum = [1, NaN, 5, 3.1412, 2, 1.42, 7, 'rex'];
//---------------------------------------
const getFiniteNumbers = arr => arr.filter(num => Number.isFinite(num));
// console.log(getFiniteNumbers(arrayNum));

//---------------------------------------
const getFiniteNumbersV2 = arr => arr.filter(num => isFinite(num));
// console.log(getFiniteNumbersV2(arrayNum));

//---------------------------------------
const getNaN = arr => arr.filter(num => Number.isNaN(num));
// console.log(getNaN(arrayNum));

//---------------------------------------
const getNaNV2 = arr => arr.filter(num => isNaN(num));
// console.log(getNaNV2(arrayNum));

//---------------------------------------
const getIntegers = arr => arr.filter(num => Number.isInteger(num));
// console.log(getIntegers(arrayNum));

// Парсинг чисел;
const arrayNum2 = [5.16, 5, 3.1412, 9];

//---------------------------------------
const getParsedIntegers = arr => arr.map(num => Number.parseInt(num));
// console.log(getParsedIntegers(arrayNum2));

//---------------------------------------
const getParsedIntegersV2 = arr => arr.map(num => parseInt(num));
// console.log(getParsedIntegersV2(arrayNum2));

//---------------------------------------

const getParsedFloats = arr => arr.map(num => Number.parseFloat(num));
// console.log(getParsedFloats(arrayNum2));

//---------------------------------------
const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num));
// console.log(getParsedFloatsV2(arrayNum2));

// Rounding numbers

const multiRound = num => {
  return [
    Math.floor(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.round(num * 100) / 100,
    +num.toFixed(2),
  ];
};

// examples
// console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]

//---------------------------------------
// Max absolute number знайти по модулю

const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr.map(num => Math.abs(num)));
};

/*
const getMaxAbsoluteNumber = (arr) =>
  !Array.isArray(arr) || arr.length === 0
    ? null
    : Math.max(...arr.map((num) => Math.abs(num)));
*/
// examples
/*
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
*/

//---------------------------------------

const getTotalPrice = arr => {
  let roundArr = arr.map(num => Math.floor(num * 100) / 100).reduce((acc, el) => acc + el, 0);

  return `$${roundArr}`;
};

const arrPrice = [1.23, 2.04, 5, 12];
// console.log(getTotalPrice(arrPrice));

//---------------------------------------
// Массив случайных чисел
/*
const getRandomNumbers = (length, from, to) => {
  if (
    !Number.parseInt(length) ||
    !Number.parseInt(from) ||
    !Number.parseInt(to)
  )
    return null;
  let randomArr = [];

  for (let i = 1; i <= length; i += 1) {
    randomArr.push(Math.round(Math.random() * (from - to) + to));
  }

  return randomArr;
};

// examples
console.log(getRandomNumbers(5, 1, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 'rex')); // ==> [3, 3, 2, 3, 2]
*/

//---------------------------------------
/*
const superRound = (num, prec) => {
  const divers = 10 ** prec;

  return [
    Math.floor(num * divers) / divers,
    Math.trunc(num * divers) / divers,
    Math.ceil(num * divers) / divers,
    Math.round(num * divers) / divers,
    +num.toFixed(prec),
  ];
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==>  [6.11, 6.11, 6.11, 6.11, 6.11]
*/
