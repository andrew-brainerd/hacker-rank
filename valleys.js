function countingValleys(n, s) {
  let valleyCount = 0;
  let altitude = 0;

  for (const i in s) {
    const isInValley = altitude < 0;

    if (s[i] === 'U') {
      altitude += 1;
    } else {
      altitude -= 1;
    }

    if (!isInValley && altitude < 0) {
      valleyCount++;
    }
  }

  return valleyCount;
}

function main() {
  const n = 8;
  const ar = 'UDDDUDUU';

  let result = countingValleys(n, ar);

  console.log(result);
}

main();
