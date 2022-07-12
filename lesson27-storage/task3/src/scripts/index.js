import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { setItem, getItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
  setItem();
  getItem();
});

const onStarageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStarageChange);
