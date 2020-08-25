function findDuplicates(arr) {
  const counts = {};

  for (a in arr) {
    const item = arr[a];
    counts[item] = counts[item] ? counts[item] + 1 : 1;
  }

  return Object.keys(counts).filter(num => counts[num] !== 1);
}

console.log(findDuplicates([1, 2, 3]));
console.log(findDuplicates([1, 2, 2]));
console.log(findDuplicates([3, 3, 3]));
console.log(findDuplicates([1, 2, 1, 2]));