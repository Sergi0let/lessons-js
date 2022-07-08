export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.slice().reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  const indexClient = clients.indexOf(client);
  if (balances[indexClient] < amount) return false;
  return balances[indexClient] - amount;
};

export const getAdults = (obj) => {
  const newObj = {};
  const arrObj = Object.entries(obj);

  arrObj.filter((el) => {
    if (el[1] >= 18) {
      newObj[el[0]] = obj[el[0]];
    }
  });

  return newObj;
};
