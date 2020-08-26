function noTempSwap(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;

  return { x, y };
}

console.log(noTempSwap(3, 5));
