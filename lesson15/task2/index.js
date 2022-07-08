function createCalculator() {
  let num = 0;

  function add(number) {
    num += number;
  }

  function decrease(number) {
    num -= number;
  }

  function reset(number) {
    num = 0;
  }

  function getMemo() {
    return num;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

const calculator1 = createCalculator();

console.log(calculator1.add(5));
console.log(calculator1.decrease(4));
console.log(calculator1.reset());
console.log(calculator1.getMemo());

const calculator2 = createCalculator();
console.log(calculator2.add(5));
console.log(calculator2.decrease(1));
console.log(calculator1.reset());
console.log(calculator2.getMemo());
