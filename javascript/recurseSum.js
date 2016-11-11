/*

We are given an integer for each invocation.
We don't know how many times the function will be called.
We are assuming that all arguments will be valid integers.
We are also assuming that the last invocation will pass no params, returning final answer.

Input: integer || no parameter
Output: Sum of all integer values

*/

function recurseSum() {
  if (!arguments[0]) {
  	return 0;
  }

  arg = arguments[0];

  return function() {
  	if (!arguments[0]) {
  		return arg;
  	} else {
  		return recurseSum(arguments[0] + arg);
  	}
  };
}


//////////////////////////////////////////////////
// TESTS: [All should return `true`]

console.log(recurseSum(10)() === 10);

console.log(recurseSum(10)(25)(-10)() === 25);

console.log(recurseSum(5)(7)(10)(2)(-18)() === 6);

console.log(recurseSum() === 0);

console.log(recurseSum(5)(7)() === 12);
