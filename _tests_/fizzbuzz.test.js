const { valueFor } = require('../src/fizzbuzz');

test('cuando el número es 1 devuelve "1"', () => {
  expect(valueFor(1)).toBe("1");
});
