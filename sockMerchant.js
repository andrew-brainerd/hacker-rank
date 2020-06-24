function sockMerchant(n, ar) {
  const styles = {};
  for (const sock in ar) {
    styles[ar[sock]] = styles[ar[sock]] ? styles[ar[sock]] + 1 : 1;
  }

  let pairs = 0;
  for (const style in styles) {
    pairs += Math.floor(styles[style] / 2);
  }

  return pairs;
}

function main() {
  const n = 9;
  const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

  let result = sockMerchant(n, ar);

  console.log(result);
}

main();
