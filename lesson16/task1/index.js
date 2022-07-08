// var:
var a = 17;

if (a) {
  var a = 1;
  console.log(a);
}
console.log(a);

// let:
let a1 = 17;

if (a1) {
  let a1 = 1;
  console.log(a1);
}
console.log(a1);

//------------
var greeting = 'Hello';

function sayHi() {
  greeting = 'Hi';
  console.log(greeting);

  if (false) {
    var greeting;
  }
}
sayHi();
console.log(greeting);

//------------------
