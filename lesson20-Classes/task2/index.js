// eslint-disable-next-line max-classes-per-file
class Vehicle {
  constructor(name, hasWheels) {
    this.hasWheels = hasWheels;
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
  // extends розширяє Ship можливостями Vehicle, наслідує його методи !!!
  constructor(name, speed) {
    // SUPER посилання на батьківський клас Vehicle, без super this не визначений і буде помилка !!!
    super(name, false); // hasWheels false по замовчуванням
    this.speed = speed; // додаємо властивість швидкість
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move(); // super звертаєтся до метода батька
  }

  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}

// екземпляр класса
const ship1 = new Ship('Aurora', 17);
console.log(ship1);
ship1.move();
ship1.stop();
