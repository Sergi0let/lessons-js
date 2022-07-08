export const squaredNumbers = () => {
  const number = [...document.querySelectorAll('.number')];
  const squared = elem => elem * elem;

  number.forEach(elem => {
    const { _, number } = elem.dataset;
    elem.setAttribute('data-squared-number', squared(number));
  });
};

// squaredNumbers();
