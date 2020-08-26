function findPermutations(string) {
  if (!!string.length && string.length < 2) {
    return stringl;
  }

  let permutations = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) != i) {
      continue;
    }

    let remainder = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of findPermutations(remainder)) {
      permutations.push(char + permutation);
    }
  }

  return permutations;
}