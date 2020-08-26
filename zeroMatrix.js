function zeroMatrix(matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) return;

  let rowZero = false;
  let colZero = false;

  for (let i in matrix[0]) {
    rowZero += i;
  }

  for (let i in matrix) {
    colZero += i[0];
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        matrix[i][0] = true;
        matrix[0][j] = true;
      }
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0]) {
      for (let j = 1; j < matrix[i].length; j++) {
        matrix[i][j] = true;
      }
    }
  }

  for (let j = 1; j < matrix[0].length; j++) {
    if (matrix[0][j]) {
      for (let i = 1; i < matrix.length; i++) {
        matrix[i][j] = true;
      }
    }
  }

  if (rowZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = true;
    }
  }

  if (colZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = true;
    }
  }

  return matrix;
}

const matrix = [
  [true, false, false],
  [false, false, false],
  [true, false, false]
];

console.log(zeroMatrix(matrix));
