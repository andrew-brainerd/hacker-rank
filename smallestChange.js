function smallestChange(change) {
  let cents = change;

  const quarters = Math.floor(cents / 25);
  cents -= 25 * quarters;

  const dimes = Math.floor(cents / 10);
  cents -= 10 * dimes;

  const nickels = Math.floor(cents / 5);
  cents -= 5 * nickels;

  let pennies = cents;

  return [quarters, dimes, nickels, pennies];
}

console.log(smallestChange(1));
console.log(smallestChange(3));
console.log(smallestChange(7));
console.log(smallestChange(32));