function getMedian(arr1, arr2) {
  const jointArr = [...arr1, ...arr2].sort();
  const isEvenLength = jointArr.length % 2 === 0;
  const medianIndex = Math.ceil(jointArr.length / 2);

  let median = null;

  if (isEvenLength) {
    median = (jointArr[medianIndex] + jointArr[medianIndex - 1]) / 2
  } else {
    median = jointArr[medianIndex];
  }

  return median;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(getMedian(arr1, arr2));

arr1 = [5, 7, 9, 9, 11];
arr2 = [];
console.log(getMedian(arr1, arr2));

arr1 = [1, 2, 2, 4, 5, 7];
console.log(getMedian(arr1, arr2));
