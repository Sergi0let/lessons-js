const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const buttonClear = document.querySelector('.clear-btn');
const eventsListElem = document.querySelector('.events-list');
const attachHandless = document.querySelector('.attach-handlers-btn');
const removeHandless = document.querySelector('.remove-handlers-btn');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span> `;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');

const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreyP = logTarget.bind(null, 'P', 'grey');

const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

buttonClear.addEventListener('click', function () {
  eventsListElem.innerHTML = '';
});

attachHandless.addEventListener('click', function () {
  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);

  divElem.addEventListener('click', logGreyDiv, true);
  pElem.addEventListener('click', logGreyP, true);
  spanElem.addEventListener('click', logGreySpan, true);
});

removeHandless.addEventListener('click', function () {
  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);

  divElem.removeEventListener('click', logGreyDiv, true);
  pElem.removeEventListener('click', logGreyP, true);
  spanElem.removeEventListener('click', logGreySpan, true);
});
