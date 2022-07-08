// 1. 17 равно 17

it('17 toEqual 17', () => {
  expect(17).toEqual(17);
});

// 2. 18 не равно 17
it('18 not toEqual 17', () => {
  expect(18).not.toEqual(17);
});

// 3.
const getEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);
it('should get even numbers of array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);

  expect(result).toEqual([2, 4]);
});
