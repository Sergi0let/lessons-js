const buttons = [...document.querySelectorAll('.btn')];

buttons.map(button => button.addEventListener('click', handleClick));

function handleClick(event) {
  console.log(event.target.textContent);
}
