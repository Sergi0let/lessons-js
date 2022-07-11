// input: Array
// output: Object

// algo:
// 1. create new Object

// export studentsBirthDays(students) => { Jan: ['Tom', 'Ben'], Mar: ['Sam'] }

const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
];

const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

function studentsBirthDays(students) {
  const obj = students.reduce((acc, el) => {
    const month = formatter.format(new Date(el.birthDate));
    return { ...acc, [month]: acc[month] ? acc[month].concat(el) : [el] };
  }, {});
  return Object.entries(obj).reduce(
    (acc, [month, studentList]) => ({
      ...acc,
      [month]: studentList
        .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
        .map(el => el.name),
    }),
    {},
  );
}
console.log(studentsBirthDays(students));

function counter() {
  let count = 0;
  return function () {
    console.log(++count);
  };
}

let counter1 = counter();
let counter2 = counter();

counter1();
counter1();
counter2();
