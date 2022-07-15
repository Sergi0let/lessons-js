// requestUserData

const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broke') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          email: `${userId}`,
          userId,
        });
      }, 1000);
    }
  });
  return request;
};
requestUserData('broke')
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('finally'));

requestUserData('user-2')
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('finally-2'));

requestUserData('user-3')
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => console.log('finally-3'));
