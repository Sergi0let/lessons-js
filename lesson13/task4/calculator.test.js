import { calc } from './calculator.js';

it('should plus operants', () => {
  const result = calc('1 + 2');

  expect(result).toEqual('1 + 2 = 3');
});

it('should minus operants', () => {
  const result = calc('6 - 2');

  expect(result).toEqual('6 - 2 = 4');
});

if (
  ('should multiple operants',
  () => {
    const result = calc('2 * 3');

    expect(result).toEqual('2 * 3 = 6');
  })
);

it('should divede operants', () => {
  const result = calc('6 / 3');

  expect(result).toEqual('6 / 3 = 2');
});

it('should get null if not string', () => {
  const result = calc(!typeof 'string');

  expect(result).toEqual(null);
});
