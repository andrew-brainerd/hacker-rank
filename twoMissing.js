function twoMissing(arr, n) {
  let marks = [];
  let missingNums = [];

  for (let i = 0; i < n - 2; i++) {
    marks[arr[i]] = true;
  }

  for (let i = 1; i <= n; i++) {
    if (!marks[i]) {
      missingNums.push(i);
    }
  }

  return missingNums;
}

let arr = [4, 2, 3];
console.log(twoMissing(arr, arr.length + 2));

arr = [1, 2, 3, 4, 5, 6, 9, 8, 11];
console.log(twoMissing(arr, arr.length + 2));
