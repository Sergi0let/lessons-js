console.log(Number.isNaN('text')); // false;
console.log(isNaN('text')); // true;

//! перевірка на NaN тому, що NaN == Nan завжди буде = false;
console.log(Number.isNaN(NaN)); // true;

console.log(Number.isInteger(17)); // true; ціле число
console.log(Number.isInteger(17.17)); // false; не ціле число
