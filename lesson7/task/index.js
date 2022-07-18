// Фильтрация массива getSpecialNumbers

// in: Array,
// out: new filter Array

// algo
// 1. Create new Array
// 2. iterate array and checked if elem divede on 3
// 3. return filter array

// const getSpecialNumbers = array => {
//   const result = [];
//   const divedeNum = 3;
//   for (let num of array) {
//     if (num % divedeNum === 0 && num !== null) {
//       result.push(num);
//     }
//   }
//   return result;
// };

const getSpecialNumbers = array => {
  const devideNum = 3;

  return array.filter(num => num % devideNum === 0 && Number(num));
};

// test Data

const testArrOne = [1, 2, 3.12, 4, 5, -6, 7, 8, 9, 10, 11, 12];
const testArrTwo = [3, NaN, 6, undefined, null, 12];

const resultOne = getSpecialNumbers(testArrOne);
console.log('resultOne', resultOne);

const resultTwo = getSpecialNumbers(testArrTwo);
console.log('resultTwo', resultTwo);
