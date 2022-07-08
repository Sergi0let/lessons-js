// multiRound (0.1+0.2=0.30000000000000004)

// №1 num => [] передаємо число у функцію, яка за допомогою методів MATH створює масив результатів.

const multiRound = (num) => [
  Math.round(num),
  Math.floor(num),
  Math.ceil(num),
  Math.trunc(num),
  num.toFixed(2),
];
console.log('№1.1 +:', multiRound(17.1));
console.log('№1.2 -:', multiRound(-17.1));

// №2 добування дробних чисел

const multiRound2 = (num) => [
  Math.round(num * 100) / 100,
  Math.floor(num * 100) / 100,
  Math.ceil(num * 100) / 100,
  Math.trunc(num * 100) / 100,
  num.toFixed(2),
];
console.log('№ 2 +:', multiRound2(Math.PI));
console.log('№ 2 -:', multiRound2(Math.PI));
