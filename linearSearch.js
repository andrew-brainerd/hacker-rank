// O(N) time complexity
// Works on any array

function linearSearch(arr, search) {
  for (a in arr) {
    if (arr[a] === search) {
      return a;
    }
  }

  return -1;
}

function printElementFound(arr, element) {
  const searchIndex = linearSearch(arr, element);
  console.log(searchIndex > -1 ?
    `Found ${element} at ${searchIndex}` : 
    `${element} Not Found`
  );
}

const arr = [3, 1, 5, 11, 9, 15];

printElementFound(arr, 3);
printElementFound(arr, 4);
printElementFound(arr, 11);
