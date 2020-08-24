function repeatedString(s, n) {
  const repeatTimes = n / s.length;

  let baseCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      baseCount++;
    }
  }

  let totalCount = baseCount * repeatTimes;
  for (let i = 0; i < n % s.length; i++) {
    if (s[i] === 'a') {
      totalCount++;
    }
}

  return Math.floor(totalCount);
}

function main() {
  console.log(repeatedString('a', '1000000000000'));
  console.log(repeatedString('aba', '10'));
  console.log(repeatedString('gfcaaaecbg', '547602'));
}

main();
