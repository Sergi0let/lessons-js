// Клон массива - методы массивов - cloneArr(arr)

// in: arr
// out: new arr

// log:
// 1. if Array is not Array return null
// 2. make new arr - result;
// 3. iterate on arr and push element to result

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let result = [];
//   for (let elem of arr) {
//     result.push(elem);
//   }
//   return result;
// }

const cloneArr = arr => (!Array.isArray(arr) ? null : [...arr]);
// test-data:

// const testA = [1, 2, 10, 20, 'Tom', '33'];
// const testB = [{}, [], null, undefined, 33];

// const testArrA = cloneArr(testA);
// console.log(testArrA);
// testA.push('HELLo');
// console.log(testA);
// console.log(testArrA);

// console.log(cloneArr(testB));
