/*

Shell Sort

Sorting Algorithm

*/

function shellSort(arr) {
  var hold, i, j, diff;

  // diff for shellSort, 7, 5, 3, 1
  for (diff = 7; diff > 0; diff -= 2) {

    // insertion sort
    for (i = 0; i < arr.length; i += diff) {
      for (j = i; (j - diff) >= 0 && arr[j] < arr[j - diff]; j--) {
        hold = arr[j];
        arr[j] = arr[j - diff];
        arr[j - diff] = hold;
      }
    }
  }

  return arr;
}



//////////////////////////////////////////////////
// TESTS: [All should return `true`]

var test_arr = [5, 9, 0, 2];
var answer = [0, 2, 5, 9];

console.log(shellSort(test_arr).every(function(el, idx) {
  return el === answer[idx];
}));

var test_arr = [20, 7, -9, 0, 2, 19, 12, 10, -1, 6];
var answer = [-9, -1, 0, 2, 6, 7, 10, 12, 19, 20];

console.log(shellSort(test_arr).every(function(el, idx) {
  return el === answer[idx];
}));
