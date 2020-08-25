// O(sqrt(N)) time complexity
// Only works on sorted arrays

function jumpSearch(arr, search) {
  const n = arr.length;
  const step = Math.sqrt(n);
  let previous = 0;

  while (arr[Math.min(step, n) - 1] < search) {
    previous = step;
    step += sqrt(n);

    if (previous >= n) {
      return -1;
    }
  }

  while (arr[previous] < search) {
    previous++;

    if (previous === Math.min(step, n)) {
      return -1;
    }
  }

  if (arr[previous] == search)
    return previous;

  return -1;
}

function printElementFound(arr, element) {
  const searchIndex = jumpSearch(arr, element);
  console.log(searchIndex > -1 ?
    `Found ${element} at ${searchIndex}` :
    `${element} Not Found`
  );
}

const arr = [3, 1, 5, 11, 9, 15];

printElementFound(arr, 3);
printElementFound(arr, 4);
printElementFound(arr, 11);
