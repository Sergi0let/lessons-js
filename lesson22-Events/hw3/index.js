// document.querySelector('.task-status').addEventListener('change', function () {
//   if (this.checked) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// });

document
  .querySelector('.task-status')
  .addEventListener('change', event => console.log(event.target.checked));
