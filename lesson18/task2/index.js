// WALLET позичання метода
// приклад.
/*
const wallet = {
  transaction: [1, 5, 89, 337, 3],
  getMax() {
    return Math.max.apply(null, this.transaction);
  },
  getMin() {
    return Math.min.apply(null, this.transaction);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
*/

// сучасний варіант
/*
const wallet = {
  transaction: [1, 5, 89, 337, 3],
  getMax() {
    return Math.max(...this.transaction);
  },
  getMin() {
    return Math.min(...this.transaction);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
*/
