const users = {
  Tom: 17,
  'John Doe': 19,
  Bob: 18,
};

const getAdults = obj =>
  Object.entries(obj)
    .filter(el => el[1] >= 18)
    .reduce((acc, [name, age]) => {
      acc[name] = age;
      return acc;
    }, {});

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }

//--------------------------------------------------

const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customer]) => ({ id, ...customer }))
    .sort((a, b) => a.age - b.age);

/* // #2
const getCustomersList = (obj) => {
  return Object.keys(obj)
    .reduce((acc, id) => {
      acc.push({ id, ...obj[id] });
      return acc;
    }, [])
    .sort((a, b) => a.age - b.age);
};
*/
// variabless
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

console.log(getCustomersList(customers));
