/*

Selection Sort

Sorting Algorithm

*/

function selectSort(arr) {
  var temp, j, val;

  for (var i = 0; i < arr.length; i++) {
    for (j = temp = i; j < arr.length; j++) {
      if (arr[j] < arr[temp]) {
        temp = j;
      }
    }
    val = arr[i];
    arr[i] = arr[temp];
    arr[temp] = val;
  }
  return arr;
}


//////////////////////////////////////////////////
// TESTS: [All should return `true`]

var test_arr = [5, 9, 0, 2];
var answer = [0, 2, 5, 9];

console.log(selectSort(test_arr).every(function(el, idx) {
  return el === answer[idx];
}));

var test_arr = [20, 7, -9, 0, 2, 19];
var answer = [-9, 0, 2, 7, 19, 20];

console.log(selectSort(test_arr).every(function(el, idx) {
  return el === answer[idx];
}));
