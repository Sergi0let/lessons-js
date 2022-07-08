const setButton = buttonText => {
  document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
};

// test-data
setButton('Button');
