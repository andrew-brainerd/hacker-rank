const assert = require('assert');

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

assert(factorial(3), 6);
assert(factorial(4), 24);
assert(factorial(5), 120);
assert(factorial(13), 6227020800);
