// O(logN) time complexity
// Only works on sorted arrays

function binarySearch(arr, search, start, end) {
  const startNum = start || 0;
  const endNum = end || arr.length - 1;

  if (startNum > endNum) {
    return false;
  }

  const middle = Math.floor((startNum + endNum) / 2);

  if (arr[middle] === search) {
    return true;
  } else if (arr[middle] > search) {
    return binarySearch(arr, search, startNum, middle - 1);
  } else if (arr[middle] < search) {
    return binarySearch(arr, search, middle + 1, endNum);
  }
}

function printElementFound(arr, element) {
  console.log(binarySearch(arr, element) ? `Found ${element}` : `${element} Not Found`);
}

const arr = [1, 3, 5, 7, 9, 11];

printElementFound(arr, 3);
printElementFound(arr, 4);
printElementFound(arr, 11);