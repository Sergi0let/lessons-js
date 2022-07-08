document.querySelector('.single-use-btn').addEventListener('click', function action() {
  console.log('clicked');
  this.removeEventListener('click', action);
});
