/*

We are given an array of all integers.
For each index of that array, find the product of every other index.

Example input: [6, 2, 1, 8]
Example Output: [16, 48, 96, 12]

Edge Cases:
 > Zeroes can exist in the array.
 > Numbers do not have to be unique.
 > Division is not allowed.

*/


function productAllNumbers(arr) {
  var result = [];
  var dupArr = arr.slice(0);
  var first;

  for (var i = 0; i < arr.length; i++) {
    first = dupArr.splice(i, 1);
    result.push(dupArr.reduce((t, n) => t * n, 1));
    dupArr.splice(i, 0, first);
  }

  return result;
}

console.log(productAllNumbers([6, 2, 1, 8]));
