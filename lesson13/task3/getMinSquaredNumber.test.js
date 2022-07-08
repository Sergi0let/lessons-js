import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should get empty array', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('should get string element', () => {
  const result = getMinSquaredNumber(typeof elem === 'string');

  expect(result).toEqual(null);
});

it('should get minimum number in squared', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
