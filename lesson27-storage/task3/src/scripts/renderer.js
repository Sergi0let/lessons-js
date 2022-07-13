import { getItem } from './storage.js';

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  listItemElem.setAttribute('data-id', id);

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  const checkboxElem = createCheckbox({ done, id });
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  const listElem = document.querySelector('.list');

  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => createListItem({ text, done, id }));

  listElem.append(...tasksElems);
};
