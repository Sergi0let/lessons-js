// const sum = (a, b) => a + b;

// const sum = a => b => a + b;

// const add3 = sum(3);

// const result = add3(5);

// console.log(result);

export const mult = a => b => a * b;
console.log(mult(5)(4)); // 20

export const twice = num => mult(num)(2);
console.log(twice(7)); // 14

export const triple = num => mult(num)(3);
console.log(triple(9)); // 27
