export const finishList = () => {
  const listItems = document.querySelector('.list');
  const specialItem = listItems.querySelector('.special');
  const firstItem = document.createElement('li');
  const lastItem = document.createElement('li');
  const beforeItem = document.createElement('li');
  const afterItem = document.createElement('li');

  firstItem.textContent = 1;
  listItems.prepend(firstItem);

  lastItem.textContent = 8;
  listItems.append(lastItem);

  beforeItem.textContent = 4;
  specialItem.before(beforeItem);

  afterItem.textContent = 6;
  specialItem.after(afterItem);
};

// finishList();
