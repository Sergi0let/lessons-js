// methods

const user = {
  name: 'John',
  getFullName() {
    console.log(`${this.name}`);
  },
  sayHi(age, message) {
    console.log(`${message}. I'm ${this.name}. I'm ${age}`);
  },
};

// user.getFullName(); // John Doe

// втрата контекста. This це силка на обєкт перед крапкою, в момет визова функції.
const func = user.getFullName; // undefined undefined
// func();

/* BIND */
// bind() - дозволяє зафікувати контекст. Приймає обєкт як параметр для силки на нього.
const funcV2 = user.getFullName.bind(user); // John Doe;
// funcV2();

const funcV3 = user.getFullName.bind({ name: 'Tom' }); //  Tom.  можна вказати на що будемо силатися.
// funcV3();

/* CALL */
// Приймає обєкт який буде контекстом для функції.
const funcV4 = user.getFullName;

// funcV4.call({ name: 'Denis' }); // Denis;

/* APPLY */
const funcV5 = user.sayHi.apply({ name: 'Tom' }, [17, 'Hello']);
funcV5();
