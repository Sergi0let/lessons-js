// Фабрика функций - с

function createArrayOfFunctions(num) {
  if (!num) return [];
  if (!Number.isInteger(num)) return null;

  var arr = [];

  for (let i = 0; i <= num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}
/*
function createArrayOfFunctions(len = 0) {
  if (typeof len !== 'number') {
    return null;
  }

  return Array(len)
    .fill()
    .map((_, index) => () => index);
}
*/

// console.log(createArrayOfFunctions(1.2));

// var головоломка;
/*
function bar() {
  var foo = 1;
  if (!foo) {
    var foo = 10;
  }

  return foo;
}

var foo = bar();
*/
