// log: calc(initValue).add(number).substract(number).mult(number).div(number).result()

const calc = initValue => {
  let result = initValue;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

const result = calc(3).add(-2).mult(4).result();
console.log(result); // -4

const result2 = calc(3).add(2).mult(4).div(10).subtract(5).result(); // -3;
console.log(result2);
