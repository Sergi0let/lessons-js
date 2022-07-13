const addTaskBtn = document.querySelector('.create-task-btn');
const deskTaskInput = document.querySelector('.task-input');
const toDoList = document.querySelector('.list');

let tasks = [];
!localStorage.tasks ? [] : (tasks = JSON.parse(localStorage.getItem('tasks')));

let todoItemElems = [];
console.log(todoItemElems);

function Task(description) {
  this.description = description;
  this.done = false;
}

const createTemplate = (task, index) => {
  return `
     <li class="list__item" ${task.done ? 'checked' : ''}>
       <input onclick="doneTask(${index})" class="list__item-checkbox" type="checkbox" 
       ${task.done ? 'checked' : ''}/>
       <div class="description">${task.description}j</div>
     </li>
  `;
};

const fillHtmlList = () => {
  toDoList.innerHTML = '';
  if (tasks.length > 0) {
    tasks.forEach((item, index) => {
      toDoList.innerHTML += createTemplate(item, index);
    });
    todoItemElems = document.querySelectorAll('.list__item');
  }
};
fillHtmlList();

const updateLocal = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const doneTask = index => {
  tasks[index].done = !tasks[index].done;
  if (tasks[index].done) {
    todoItemElems[index].classList.add('list__item_done');
  } else {
    todoItemElems[index].classList.remove('list__item_done');
  }
  updateLocal();
  // fillHtmlList();
};

addTaskBtn.addEventListener('click', () => {
  tasks.push(new Task(deskTaskInput.value));
  updateLocal();
  fillHtmlList();
  deskTaskInput.value = '';
});
