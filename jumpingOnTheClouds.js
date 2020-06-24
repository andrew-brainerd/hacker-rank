function jumpingOnClouds(c) {
  let count = -1;
  for (let i = 0; i < c.length; i++, count++) {
    if (i < c.length - 2 && c[i + 2] == 0) {
      i++;
    }
  }

  return count;
}

function main() {
  let result = jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);

  console.log(result);
}

main();
