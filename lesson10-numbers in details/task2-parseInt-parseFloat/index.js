// parsing

// переводить цілі числа.
parseInt(' 17.17text'); //

console.log(Number.parseInt(' 17.17text')); // 17

console.log(Number.parseInt('seventeen')); // NaN

//----------------------------------

// переводить не цілі числа.
parseFloat(' 17.17text'); //

console.log(Number.parseFloat(' 17.17text')); // 17.17

console.log(Number.parseFloat('seventeen')); // NaN

// #1---Перетворити масив різних чисел на масив чисел з плаваючею точкою (parseFloat)

const parseArray = (arr) => arr.map((el) => Number.parseFloat(el));

const elementList = [4, 5.6, ' 5.7kl', null, NaN, undefined, Infinity];
console.log('#1:', parseArray(elementList));
