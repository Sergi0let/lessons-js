// Calculator:

const calc = (expression) => {
  const [a, operator, b] = expression.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  return `${expression} = ${result}`;
};
// console.log(calc('1 * 2'));

//-------------------------------------------------
// Reverse String

const reverseString = (str) =>
  typeof str === 'string' ? str.split('').reverse().join('') : null;
// console.log(reverseString('Vasia'));

//-------------------------------------------------
// Очистка данных о транзакциях

const cleanTransactionsList = (arr) => {
  const numArr = arr
    .map((elem) => +elem)
    .filter((elem) => parseFloat(elem))
    .map((elem) => '$' + elem.toFixed(2));

  console.log(numArr);
};

console.log(cleanTransactionsList([' 1.9', '16.4', 17, ' 1 dollar']));

//=--------

// const parseArray = (arr) => arr.map((el) => Number.parseFloat(el));

// const elementList = [4, 5.6, ' 5.7kl', null, NaN, undefined, Infinity];
// console.log('#1:', parseArray(elementList));
