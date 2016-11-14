/*

Insertion Sort

Sorting Algorithm

*/

function insertSort(arr) {
  var hold, i, j;

  for (i = 0; i < arr.length; i++) {

    for (j = i; (j - 1) >= 0 && arr[j] < arr[j - 1]; j--) {
      hold = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = hold;
    }
  }

  return arr;
}



//////////////////////////////////////////////////
// TESTS: [All should return `true`]

var test_arr = [5, 9, 0, 2];
var answer = [0, 2, 5, 9];

console.log(insertSort(test_arr).every(function(el, idx) {
  return el === answer[idx];
}));

var test_arr = [20, 7, -9, 0, 2, 19];
var answer = [-9, 0, 2, 7, 19, 20];

console.log(insertSort(test_arr).every(function(el, idx) {
  return el === answer[idx];
}));
