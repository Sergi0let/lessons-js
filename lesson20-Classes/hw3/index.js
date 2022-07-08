class Wallet {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('No enough funds');
      return false;
    }
    this.balance -= amount;
  }
}

const wallet1 = new Wallet();
console.log(wallet1);

wallet1.deposit(100);
console.log(wallet1.getBalance());

wallet1.withdraw(150);
// console.log(wallet1.getBalance());
