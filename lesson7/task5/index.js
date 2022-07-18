// Переверните массив reverseArray

// in: array;
// out: array new;

// log;
// 1. if array is not array return null
// 2. make new array - result;
// 3. iterate on array from end and values in new array

// Draft solution
// function reverseArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let result = [];

//   for (let index = arr.length - 1; index >= 0; index -= 1) {
//     result.push(arr[index]);
//   }
//   return result;
// }

const reverseArray = arr => (!Array.isArray(arr) ? null : arr.slice().reverse(arr));

// test-data
// const testOne = [1, 2, 3, 4, 5];
// console.log(reverseArray(testOne));

// const testTwo = ['Andrij', 'Bogdan', 'Vasyl', 'Yana'];
// console.log(reverseArray(testTwo));

// const testThree = [null, NaN, undefined, {}, []];
// console.log(reverseArray(testThree));
