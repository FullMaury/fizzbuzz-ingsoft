const { valueFor } = require('../src/fizzbuzz');

test('cuando el número es 1 devuelve "1"', () => {
  expect(valueFor(1)).toBe("1");
});

test('cuando el número es 3 devuelve "Fizz"', () => {
  expect(valueFor(3)).toBe("Fizz");
});

test('cuando el número es 5 devuelve "Buzz"', () => {
  expect(valueFor(5)).toBe("Buzz");
});

test('cuando el número es 15 devuelve "FizzBuzz"', () => {
  expect(valueFor(15)).toBe("FizzBuzz");
});
