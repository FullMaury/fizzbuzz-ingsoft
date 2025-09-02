const { valueFor } = require('../src/fizzbuzz');

test('cuando el número es 1 devuelve "1"', () => {
  expect(valueFor(1)).toBe("1");
});

test('cuando el número es 3 devuelve "Fizz"', () => {
  expect(valueFor(3)).toBe("Fizz");
});
