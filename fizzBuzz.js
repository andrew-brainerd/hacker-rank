function fizzBuzz(num) {
  for (let i = 1; i < num + 1; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
  console.log();
}

fizzBuzz(5);
fizzBuzz(15);
