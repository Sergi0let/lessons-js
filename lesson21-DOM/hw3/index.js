export const getTitle = () => {
  return document.querySelector('.title').textContent;
};

export const getDescription = () => {
  return document.querySelector('.about').innerText;
};

export const getPlans = () => {
  return document.querySelector('.plans').innerHTML;
};

export const getGoal = () => {
  return document.querySelector('.goal').outerHTML;
};

// data-test
/*
console.log('textContent: ', getTitle());
console.log('innerText: ', getDiscription());
console.log('innerHTML: ', getPlans());
console.log('outerHTML: ', getGoal());
*/
