// This в callback
const event = {
  message: 'Welcome to the party!',
  guests: [{ name: 'John', email: 'example@server.com', age: 18 }],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        message: `Dear ${name}! ${this.message}`,
        email: `${email}`,
      }));
  },
};

// console.log(event.getInvitations());
//------------------------------

const wallet = {
  transactions: [],
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};
// console.log(wallet.getMax());
// console.log(wallet.getMin());

//------------------------------

// Работа с псевдо массивами
function sumOfSquares() {
  return [...arguments].map(elem => elem * elem).reduce((acc, num) => acc + num);
}
// console.log(sumOfSquares(2, 3, 4));
