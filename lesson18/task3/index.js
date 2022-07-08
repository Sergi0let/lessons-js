// pseudo arrays

// старий метод
function func() {
  return [].reduce.call(
    arguments,
    (acc, el) => {
      return acc + el;
    },
    0,
  );
}
console.log(func(1, 2, 3));

// сучасний метод
function funcV2() {
  return [...arguments].reduce((acc, el) => acc + el, 0);
}
console.log(funcV2(1, 2, 3));
