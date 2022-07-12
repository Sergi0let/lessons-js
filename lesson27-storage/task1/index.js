localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
localStorage.setItem('name', 'Tom');
localStorage.setItem('age', JSON.stringify(17));

console.log('LocalStorageData: ', localStorage);

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log('function getLocalStorageData: ', getLocalStorageData());

// const user = {
//   name: 'Tom',
//   age: 17,
//   isStudent: false,
//   driverLicense: null,
//   hobbies: ['football', 'diving'],
//   education: [
//     {
//       name: 'MIT precourse',
//       graduateDate: '2020-05-04T14:48:46.105Z',
//     },
//   ],
// };
