/*
const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};
ship.startMachine();
ship.stopMachine();
*/

// Перебор собственных свойств объекта (for..in)
function getOwnProps(obj) {
  return Object.entries(obj)
    .filter(([key, values]) => typeof values !== 'function')
    .map(el => el[0]);
}

// data-test
/*
const venicle = {
  isMoving: false,
  move() {
    console.log(`${this.name} moving`);
  },
  stop() {
    console.log('stopped');
  },
};
const ship = {
  name: 'Argo',
  surname: 'Vasia',
  sayHello() {
    console.log('hello');
  },
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },

  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: venicle,
};
*/
// console.log(getOwnProps(ship));

// --------------------------------------------------
