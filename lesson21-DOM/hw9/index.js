export const finishForm = () => {
  const loginForm = document.querySelector('.login-form');
  const inputLogin = document.createElement('input');
  inputLogin.setAttribute('type', 'text');
  inputLogin.setAttribute('name', 'login');
  loginForm.prepend(inputLogin);

  loginForm.lastElementChild.setAttribute('type', 'password');
};
// finishForm();
