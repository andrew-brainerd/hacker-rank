function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome('assa'));
console.log(isPalindrome('something gnihtemos'));
console.log(isPalindrome('not it'));
