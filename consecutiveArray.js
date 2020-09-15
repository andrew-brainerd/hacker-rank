function consecutive(arr) {
  const array = arr.sort(function (a, b) { return a - b; });
  let count = 0;

  for (var j = array[0]; j < array[array.length - 1]; j++) {
    if (array.indexOf(j) == -1) {
      count++;
    }
  }
  return count;
}

console.log(consecutive([4, 2, 1, 6, 5]));
console.log(consecutive([5, 5, 3, 1]));
