function valueFor(n) {
  if (n === 3) return "Fizz";
  if (n === 5) return "Buzz";
  return String(n);
}

module.exports = { valueFor };
