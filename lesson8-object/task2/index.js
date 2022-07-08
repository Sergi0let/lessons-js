/* Обєкт копіюєтся:
  1. Object.assign({}, users).
  2. Через спред оператор { ...players }.
  3. ДЕСТРУКТОРИЗАЦІЯ const { name: myName = 'default', ...restProps } = user
  4. Всі ці етати копіюють обєкти до
*/
//--------------------------

const user = {
  name: 'Tom',
  key: 17,
};
const users = {
  Tom: 17,
};

const players = {
  'John Doe': 19,
  Bob: 18,
};
//--------------------------

//* взнаємо значення обєкта
const concatProps = (obj) => Object.values(obj);

// console.log(concatProps(user));

//* Копіювання обєктів.

const res = Object.assign({}, users);

// console.log(users);
// console.log(players);
console.log(res);
console.log(users === res); // false;

//* Функция на копіювання Обєкта.

const copyObj = (obj) => Object.assign({}, obj);
const copy = copyObj(players);
console.log(copy);

console.log(players === copy);

//* Функция на копіювання Обєкта spread...

const copy2 = { ...players };

console.log(players === copy2); // false два різних обєкта;

//* Функция на копіювання Обєкта ДЕСТРУКТОРИЗАЦІЯ.

const { name: myName = 'default', ...restProps } = user;
console.log(restProps);

const player = {
  game: 'football',
  ...restProps,
};

console.log(player);
