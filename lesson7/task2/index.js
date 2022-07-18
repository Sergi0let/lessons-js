// Плоский массив flatArray

// in : array of numbers and arrays;
// out: array sort in descending order

// 1. create new array - result
// 2. iterate on array and push num to result
// 2.1 if num is array, merge it with result
// 3. sort result in descending order

// function flatArray(array) {
//   let result = [];
//   for (let num of array) {
//     if (Number(num)) {
//       result.push(num);
//     } else {
//       for (let subarr of num) {
//         result.push(subarr);
//       }
//     }
//   }
//   return result;
// }

// function flatArray(array) {
//   return array.reduce((arr, num) => arr.concat(num), []).sort((a, b) => b - a);
// }
function flatArray(array) {
  return array.flat();
}

// test-data

const testArr = [1, 2, [3, 4], [6, 7], 8];
const testRes = flatArray(testArr);
console.log(testRes);
