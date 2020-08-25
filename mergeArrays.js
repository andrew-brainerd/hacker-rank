function mergeArrays(arrs) {
  let mergedArr = [];
  arrs.forEach(arr => {
    mergedArr = [...mergedArr, ...arr];
  });

  return mergedArr.sort();
}

const arr1 = [1, 2, 3];
const arr2 = [7, 3, 5];
const arr3 = [9, 3, 7];

console.log(mergeArrays([arr1, arr2, arr3]));