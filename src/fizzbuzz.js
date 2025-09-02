function valueFor(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}

function sequenceUpTo(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(valueFor(i));
  }
  return result;
}

module.exports = { valueFor, sequenceUpTo };
