// Фільтрація обєкта

const getAdults = obj =>
  Object.entries(obj)
    .filter(el => el[1] >= 18)
    .reduce((acc, [name, age]) => {
      acc[name] = age;
      return acc;
    }, {});

// examples
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
// console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }

// Доставання властивостей із обєкта
const pickProps = (obj, props) => {
  return props.reduce((acc, el) => {
    obj[el] === undefined ? null : (acc[el] = obj[el]);
    return acc;
  }, {});
};

// examples
// pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
// pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }

//--- Добавляю елементи в масив.
function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  Object.assign((userData.id = userId));
  return userData;
}

function addPropertyV3(userData, userId) {
  return Object.assign({ id: userId }, userData);
}

function addPropertyV4(userData, userId) {
  return { ...userData, id: userId };
}

// examples
const user = {
  name: 'Sam',
};
// addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }

//---------------------
function mergeObjectsV1(obj1, obj2) {
  return Object.assign(obj1, obj2);
}

function mergeObjectsV2(obj1, obj2) {
  return Object.assign(obj2, obj1);
}

function mergeObjectsV3(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function mergeObjectsV4(obj1, obj2) {
  return { ...obj2, ...obj1 };
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

// mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }

// Объект в массив жителей
const getPeople = obj => {
  return Object.values(obj)
    .flat()
    .reduce((acc, el) => acc.concat(el.name), []);
};

const rooms = {
  room1: [{ name: 'jack' }, { name: 'jack' }, { name: 'jack' }],
  room2: [{ name: 'jack' }, { name: 'jack' }, { name: 'jack' }],
  room3: [{ name: 'jack' }, { name: 'jack' }, { name: 'jack' }],
};

// console.log(getPeople(rooms));

// Посчитать баланс по всем транзакциям

const getTotalRevenue = transactions => transactions.reduce((acc, el) => acc + el.amount, 0);

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
// console.log(result);

// Добавление computed property
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  Object.assign(obj, { [key]: value });
  return obj;
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}
// examples
const transaction = {
  value: 170,
};
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// Собрать объект
function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, el, index) => {
    acc[el] = valuesList[index];
    return acc;
  }, {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result1 = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result1);

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 34,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

function getCustomersList(customer) {
  return Object.entries(customer).map(([a, b]) => ({ a, ...b }));
}
console.log(getCustomersList(customers));
