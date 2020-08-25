function maxProfit(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const difference = prices[j] - prices[i];

      if (difference > maxProfit) {
        maxProfit = difference;
      }
    }
  }

  return maxProfit;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));