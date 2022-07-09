// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
//* const formFields = [...new FormData(formElem)];
// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

// *const formData = formFields.reduce(function (acc, formField) {
// *const prop = formField[0]; // здесь "name" инпута
// *const value = formField[1]; // здесь "value" инпута
// если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
// const [prop, value] = formField;
//* return {
// используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
// ...acc,
// используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
//     [prop]: value,
//   };
// }, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));

// input: Array
// output: Object

// algo:
// 1. create new Object

// export const studentsBirthday = students => {};

const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
];

const formData = Object.fromEntries(new FormData(students[0]));
