// Разбить текст на строки
// Split String ('abcd efgh', 4) => 'Abcd\n efg\nH'

const splitText = (str, num = 10) => {
  if (typeof str !== 'string') return null;

  const strArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = str.substr(startPosition, num);

    if (chunk.length === 0) break;

    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));

    startPosition += num;
  }
  return strArr.join('\n');
};
// console.log(splitText('resxdkfpej', 4));

//-----------------------------------------------------------
// sortContacts

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Stephan',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Adel',
    phoneNumber: '111-11-11',
  },
];

const sortContacts = (contacts) => {
  return contacts.sort((a, b) => a.name.localeCompare(b.name));
};
// console.log(sortContacts(contacts));
// -------------------------------------------------------
const sortContactsV2 = (contacts, isAsk = true) => {
  let sortArr = [];
  if (!isAsk) {
    sortArr = contacts.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    sortArr = contacts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return sortArr;
};
// console.log(sortContactsV2(contacts, true));

// -------------------------------------------------------
// Разбить строку на подстроки ['qqq', 'qqq', 'w..']
const splitString = (str, len = 10) => {
  if (typeof str !== 'string') return null;
  const strArr = [];
  let startPosition = 0;

  for (let i = 0; i < str.length % len; i += 1) {
    str += '.';
  }

  while (true) {
    const chunk = str.substr(startPosition, len);
    if (chunk.length === 0) break;
    strArr.push(chunk);
    startPosition += len;
  }
  return strArr;
};
// console.log(splitString('qqqqqqw', 3));

// -------------------------------------------------------
// Count occurences повинна найти кількість входжень підрядка в рядку.

const countOccurrences = (text = '', str) => {
  if (str.length === 0) return null;
  return text.split(str).length - 1;
};
// console.log(countOccurrences('rexhghrex', 'rex')); // 2

const countOccurrencesV2 = (text, str) => {
  if (str.length === 0) return null;
  let count = 0;
  let pos = text.indexOf(str);
  while (pos !== -1) {
    pos = text.indexOf(str, pos + 1);
    count += 1;
  }
  return count;
};
// console.log(countOccurrencesV2('rexhghrexrex', 'rex'));
