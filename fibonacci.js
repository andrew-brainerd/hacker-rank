function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

let nums = [];
for (let i = 1; i < 30; i++) {
  nums.push(fibonacci(i));
}

console.log(nums);
