export const getSection = num => {
  const spans = [...document.querySelectorAll('span')];

  const currentElement = spans.find(elem => {
    const numAttribute = +elem.getAttribute('data-number');
    if (num === numAttribute) {
      return elem;
    }
  });
  return currentElement.parentElement.getAttribute('data-section');
};

console.log(getSection(2));
