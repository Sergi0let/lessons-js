/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
class Order {
  constructor(price, city, type) {
    this.id = String(Math.random() * (5 - 1) + 1);
    this.price = price;
    this.dateCreated = new Date();
    this.dateConfirmed = null;
    this.isConfirmed = false;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return !!(this.type === 'Buy' || this.type === 'Sell');
  }
}

// test-data
const order1 = new Order(1100, 'Berlin', 'Sell');
console.log(order1);
console.log('Check price ', order1.checkPrice());

console.log(order1.confirmOrder());
console.log(order1);
