import { reverseArray, withdraw, getAdults } from './index';

// reverseArray
it('should get reverse numbers array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([5, 4, 3, 2, 1]);
});

it('should get reverse name array', () => {
  const result = reverseArray(['Maruna', 'Eduard', 'Natalia']);

  expect(result).toEqual(['Natalia', 'Eduard', 'Maruna']);
});

it('should get reverse fruits array', () => {
  const result = reverseArray(['banan', 'lemon', 'mango']);

  expect(result).toEqual(['mango', 'lemon', 'banan']);
});

// Withdraw
it('should Ann have not enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 1450);

  expect(result).toEqual(false);
});

it('should John have enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should User have not enough money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 106);

  expect(result).toEqual(false);
});

// Фильтрация объекта
it('should take person who have age >= 18 ', () => {
  const result = getAdults({ Rex: 89, Jerry: 17, Luke: 14 });

  expect(result).toEqual({ Rex: 89 });
});

it('should take person who have age >= 18 ', () => {
  const result = getAdults({ Merlin: 110, Artur: 44, Lesi: 16 });

  expect(result).toEqual({ Merlin: 110, Artur: 44 });
});

it('should take person who have age >= 18 ', () => {
  const result = getAdults({ Kitana: 145, 'Liu Kan': 28, 'Shang Tsung': 320 });

  expect(result).toEqual({ Kitana: 145, 'Liu Kan': 28, 'Shang Tsung': 320 });
});
