// input: arguments, (name = String, numberOfWheels = 'Boolean', maxSpeed = 'number')
// output: none;
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name);
    this.numberOfWheels = numberOfWheels;
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}

// data-test
console.log('-----------------Black Perl-------------');
const ship1 = new Ship('Black Perl', false, 7);
console.log(ship1); // {name: 'Black Perl', numberOfWheels: false, maxSpeed: 7}

ship1.move(); // Black Perl lifting anchor up. Black Perl is moving
ship1.stop(); // Black Perl lifting anchor down. Black Perl stopped

console.log('-----------------Fly Golland-------------');
const ship2 = new Ship('Fly Golland', false, 12);
console.log(ship2); // {name: 'Fly Golland', numberOfWheels: false, maxSpeed: 12}
ship2.move(); // Fly Golland lifting anchor up. Fly Golland is moving
ship2.stop(); // Fly Golland lifting anchor down. Fly Golland stopped
