const baseUrl = 'https://62d7ad6c49c87ff2af3a6350.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

const createUser = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};
const getUser = () => {
  return fetch(baseUrl);
};

getUser()
  .then(data => data.json())
  .then(init => console.log(init));

const checkInputs = () => {
  const emailInElem = document.querySelector('input[type="email"]').reportValidity();
  const userInElem = document.querySelector('input[type="text"]').reportValidity();
  const passwordInElem = document.querySelector('input[type="password"]').reportValidity();

  if (userInElem && passwordInElem && emailInElem) {
    buttonElem.removeAttribute('disabled');
  }
};

const readUserData = () => {
  createUser(Object.fromEntries(new FormData(formElem)))
    .then(response => {
      return response.json();
    })
    .then(data => alert(JSON.stringify(data, null, 2)));
  formElem.reset();
};

formElem.addEventListener('input', checkInputs);
buttonElem.addEventListener('click', readUserData);
buttonElem.addEventListener('click', () => buttonElem.setAttribute('disabled', false));

// buttonElem.addEventListener('click', e => e.preventDefault());
