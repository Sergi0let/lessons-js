// Square array

// in: array
// out: new array

// log:
// 1. if not Array return null
// 2. make new arr
// 3. iterate on arr and bring to squera and push in new arr
// Draft Solution
/*
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let result = [];
  for (let num of arr) {
    result.push(num * num);
  }
  return result;
}
*/

const squareArray = arr => (!Array.isArray(arr) ? null : arr.map(num => num * num));

// examples
console.log(squareArray([10, 10, 10])); // ===> [100, 100, 100]
console.log(squareArray([0, 0, 1, 3])); // ===> [0, 0, 1, 9]
console.log(squareArray([-1, 0, -1, 1])); // ===> [1, 0, 1, 1]
console.log(squareArray([null, undefined, true, false])); // ===> [0, NaN, 1, 0]
console.log(squareArray({ name: 'Tom' })); // ===> [1, 0, 1, 1]
