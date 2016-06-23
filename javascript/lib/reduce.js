// Recreate the `reduce` function in JavaScript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// Note: When no `initial` value is passed, `reduce` will set initial to
//   the first element in the array. So the loop will go iterate the
//   array one less time.


Array.prototype.reduction = function(fxn, initial) {
  var dupArr = this.slice(0);
  var total;

  if (initial === undefined) {
    total = dupArr.shift();
  } else {
    total = initial;
  }

  for (var i = 0; i < dupArr.length; i++) {
    total = fxn(total, dupArr[i])
  }

  return total;
}

//////////////////////////////////////////////////
// TESTS: [All should return `true`]

var a = [1, 2, 3, 4];

console.log(a.reduction(function(prev, curr) {
  return prev + curr;
}) === 10);

console.log(a.reduction(function(prev, curr) {
  return prev + curr;
}, 5) === 15);

console.log(a.reduction(function(prev, curr) {
  return prev * curr;
}, 1) === 24);

console.log(a.reduction(function(prev, curr) {
  return prev + curr;
}, 5) === 15);


// According to Mozilla docs, we can also flatten an array using `reduce`
var reduceArray = [[0, 1], [2, 3], [4, 5]].reduce(function(prev, curr) {
  return prev.concat(curr);
}, []);
var expArray = [0, 1, 2, 3, 4, 5];

console.log(reduceArray.length == expArray.length && reduceArray.every(function(el, idx) {
  return el === expArray[idx];
}));
