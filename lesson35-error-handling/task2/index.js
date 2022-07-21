const successRequest = Promise.resolve({ name: 'Tom' });

// #1
// successRequest
//   .then(data => {
//     console.log(data);
//     throw new Error('Unexpected error');
//   })
//   .catch(err => {
//     console.warn(err.message);
//   });

// #2 робимо запрос на сервер і щось впало

const failedRequest = Promise.reject(new Error('Fail'));

failedRequest
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.warn(err.message);
    // return Promise.reject(err);
    throw err;
  })
  .then(data => {
    console.log(data);
  });
