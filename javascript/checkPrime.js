/*

How would you verify a prime number?
A prime number is only divisible by itself and 1. Assume you will always get an Integer argument of 2 or greater.

Example input: 17
Example ouput: true

*/

function checkPrime(num) {
  var divisor = 2;

  while (divisor < num) {
    if (num % divisor === 0) {
      return false;
    }
    divisor++;
  }

  return true;
}


console.log(checkPrime(17)); // true
console.log(checkPrime(78)); // false
console.log(checkPrime(15485863)); // true
