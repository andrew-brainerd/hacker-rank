const dictionary = ['abc', 'acd', 'bcd', 'def', 'a', 'aba'];

function autocomplete(prefix) {
  const words = [];

  for (d in dictionary) {
    const word = dictionary[d];

    if (word.startsWith(prefix)) {
      words.push(dictionary[d]);
    }
  }

  return words;
}

console.log(autocomplete('a'));
console.log(autocomplete('ab'));
console.log(autocomplete('bc'));
