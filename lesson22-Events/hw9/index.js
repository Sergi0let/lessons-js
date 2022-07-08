const buttons = [...document.querySelectorAll('.pagination__page')];
buttons.forEach(elem => {
  elem.addEventListener('click', handleClick);
});

function handleClick(event) {
  const curentBtn = event.target.dataset;
  console.log(Object.values(curentBtn).join());
}
