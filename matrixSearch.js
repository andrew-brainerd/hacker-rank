function matrixSearch(matrix, search) {
  if (matrix.length == 0 || matrix[0].length == 0) {
    return false;
  }

  let row = 0;
  let col = matrix.length - 1;

  while (row < matrix[0].length && col >= 0) {
    if (matrix[row][col] == search) {
      return true;
    }

    if (matrix[row][col] < search) {
      row++;
    }
    else {
      col--;
    }
  }

  return false;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrixSearch(matrix, 3));
console.log(matrixSearch(matrix, 5));
console.log(matrixSearch(matrix, 10));
