import { renderListItems } from './render.js';
import { getItem, setItem } from './storage.js';

export const onAddClick = function () {
  const taskName = document.getElementById('task-name');

  let tasks = getItem('tasks') || [];

  if (taskName.value == null || taskName.value.trim() == '') {
    return;
  }

  const task = {
    text: taskName.value,
    done: false,
    createDate: Date.now(),
  };

  tasks.push(task);
  setItem('tasks', tasks);

  renderListItems();

  taskName.value = '';
};

export function onDoneClick() {
  const id = this.id;
  let tasks = getItem('tasks') || [];
  const task = tasks.find(t => t.createDate == id);
  task.done = this.checked;
  task.createDate = Date.now();
  setItem('tasks', tasks);
  renderListItems();
}
const button = document.getElementById('add-btn');
button.onclick = onAddClick;
