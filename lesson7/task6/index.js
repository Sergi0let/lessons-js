// Увеличение четных - методы массивов
// in : Array & number
// out: Array new

// log:
// 1. null if not Array
// 1.1 make new Array
// 2. iterate on array
// 3. if iterate num is even
// 3.1. this num plus delta(number)
// 4. return new Array

// function increaseEvenEl(arr, delta) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let result = [];

//   for (let num of arr) {
//     if (num % 2 === 0) {
//       result.push(num + Number(delta));
//     } else {
//       result.push(num);
//     }
//   }

//   return result;
// }

const increaseEvenEl = (arr, delta) =>
  !Array.isArray(arr) ? null : arr.map(num => (num % 2 === 0 ? num + Number(delta) : num));

// test - data
// const testA = [1, 3, 5, 7, 9];
// const testB = [10, 3, 50, 8, 9];
// const testC = [10, 3, 50, 8, 9];
// console.log(increaseEvenEl(testA, 10));
// console.log(increaseEvenEl(testB, 2));
// console.log(increaseEvenEl(testC, '2'));
