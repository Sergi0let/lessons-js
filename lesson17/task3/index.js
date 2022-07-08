// defer(fun, ms) => function

function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms); //func.apply(this, arguments);
  };
}

//---------------------------
const sayHi = () => {
  console.log('Hi');
};
// sayHi();
const defferedSayHi = defer(sayHi, 1000);
defferedSayHi();

//---------------------------
const sum = (a, b) => {
  console.log(a + b);
};
const defferedSum = defer(sum, 1000);
defferedSum(2, 3);

//---------------------------
const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I a'm ${this.name}!`);
  },
};

const defferedHi = defer(user.sayHi, 1000);
defferedHi();

defferedHi.call({ name: 'Bob' });
