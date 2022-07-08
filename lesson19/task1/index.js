// vehicle and ship

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
  name: 'Aurora',
  hasWheels: false,
  liftAnchorDown() {
    console.log('lifting anchor down');
  },
  liftAnchorUp() {
    console.log('lifting anchor up');
  },
  // __proto__: venicle,
};

Object.setPrototypeOf(ship, venicle);

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) console.log(prop);
// }

console.log(Object.keys(ship));
