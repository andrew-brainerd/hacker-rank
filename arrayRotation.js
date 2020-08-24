const assert = require('assert');

function rotateArrayLeft(arr, n) {
  const rotation = n > arr.length ? n % arr.length : n;
  const lastElements = arr.slice(0, rotation);

  return [...arr.slice(rotation), ...lastElements];
}

function rotateArrayRight(arr, n) {
  let rotatedArr = arr;
  for (let i = 0; i < n; i++) {
    const lastElement = rotatedArr[rotatedArr.length - 1];
    rotatedArr = [lastElement, ...rotatedArr.slice(0, rotatedArr.length - 1)];
  }

  return rotatedArr;
}


let arr = [1, 2, 3];
assert.deepEqual(rotateArrayLeft(arr, 1), [2, 3, 1]);
assert.deepEqual(rotateArrayRight(arr, 1), [3, 1, 2]);
assert.deepEqual(rotateArrayRight(arr, 2), [2, 3, 1]);

arr = [1, 2, 3, 4, 5];
assert.deepEqual(rotateArrayLeft(arr, 3), [4, 5, 1, 2, 3]);
assert.deepEqual(rotateArrayRight(arr, 2), [4, 5, 1, 2, 3]);
assert.deepEqual(rotateArrayRight(arr, 3), [3, 4, 5, 1, 2]);
assert.deepEqual(rotateArrayRight(arr, 4), [2, 3, 4, 5, 1]);

arr = [1, 2, 3, 4, 5, 6, 7];
assert.deepEqual(rotateArrayLeft(arr, 2), [3, 4, 5, 6, 7, 1, 2]);
assert.deepEqual(rotateArrayRight(arr, 2), [6, 7, 1, 2, 3, 4, 5]);
