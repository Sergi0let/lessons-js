import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { deleteTask, getTasksList, updateTask } from './tasksGateway.js';

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');
  const isDelete = e.target.classList.contains('list__item-delete-btn');

  if (!isCheckbox && !isDelete) {
    console.log('return');
    return;
  }

  const tasksList = getItem('tasksList');
  const taskId = e.target.dataset.id;

  // -------------------------------------
  if (isCheckbox) {
    console.log('isCheckbox');
    console.log(taskId);

    const { text, createDate } = tasksList.find(task => task.id === taskId);
    const done = e.target.checked;

    const updatedTask = {
      text,
      createDate,
      done,
      finishDate: done ? new Date().toISOString() : null,
    };

    updateTask(taskId, updatedTask)
      .then(() => getTasksList())
      .then(newTasksList => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }

  if (isDelete) {
    console.log('isDelete');
    console.log(taskId);

    deleteTask(taskId)
      .then(() => getTasksList())
      .then(newTasksList => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }
};

//----------------------------------------------------
// .then(() => getTasksList())
// .then(newTasksList => {
//   setItem('tasksList', newTasksList);
//   renderTasks();
// });
// 1. prepere data
// 2. update date in basedat
// 3. Read new data from server
// 4. Save new data to fron-end storage
// 5 Update Ui based on new data
// export const onToggleTask = e => {
//   const isCheckbox = e.target.classList.contains('list__item-checkbox');

//   if (!isCheckbox) {
//     return;
//   }

//   const tasksList = getItem('tasksList');
//   const taskId = e.target.dataset.id;

//   const { text, createDate } = tasksList.find(task => task.id === taskId);
//   const done = e.target.checked;

//   const updatedTask = {
//     text,
//     createDate,
//     done,
//     finishDate: done ? new Date().toISOString() : null,
//   };

//   updateTask(taskId, updatedTask)
//     .then(() => getTasksList())
//     .then(newTasksList => {
//       setItem('tasksList', newTasksList);
//       renderTasks();
//     });
// };

// export const onDeleteElem = e => {
//   const isDelete = e.target.classList.contains('list__item-delete-btn');
//   if (!isDelete) {
//     return;
//   }

//   const taskId = e.target.dataset.id;
//   deleteTask(taskId);
// };
