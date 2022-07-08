import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 4, 9, 16, 25]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);

  expect(result).toEqual([1, 3, 5]);
});

it('should get a sum', () => {
  const result = getSum(4, 2);

  expect(result).toEqual(6);
});
