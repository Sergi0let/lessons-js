const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  console.log(tasksList);
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-num', index);

      checkbox.addEventListener('click', function (event) {
        const currentBox = +event.target.dataset.num;
        if (tasks[currentBox].done) {
          tasks[currentBox].done = false;
        } else {
          tasks[currentBox].done = true;
        }
        listElem.innerHTML = '';

        renderTasks(tasks);
      });
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

const createTask = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');
function getNewTask() {
  if (!taskInput.value) {
    return;
  }

  const createToDo = { text: taskInput.value, done: false };
  tasks.push(createToDo);
  console.log(tasks);
  taskInput.value = '';
  listElem.innerHTML = '';
  renderTasks(tasks);
}
createTask.addEventListener('click', getNewTask);
