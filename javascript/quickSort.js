/*
QuickSort

Sorting Algorithm

Using a pivot and wall, iterate over the array, comparing each value with pivot.
If the value is less than pivot, move to the left of the wall.
After comparing all values, swap pivot with wall, and then partition and recursively solve each sub-array.
*/

function quickSort(arr, low, high) {
  if (low < high) {
    let pt = partition(arr, low, high);
    quickSort(arr, low, pt - 1);
    quickSort(arr, pt + 1, high);
  }

  return arr;
}

function partition(arr, low, high) {
  let pivot = high;
  let wall = low;

  for (let i = low; i < high; i++) {
    if (arr[i] < arr[pivot]) {
      arr[i] = [arr[wall], arr[wall] = arr[i]][0];  /* One-liner swap */
      wall++;
    }
  }
  arr[pivot] = [arr[wall], arr[wall] = arr[pivot]][0];

  return wall;
}

//////////////////////////////////////////////////
// TESTS: [All should return `true`]

var test_arr = [5, 9, 0, 2];
var answer = [0, 2, 5, 9];

console.log(quickSort(test_arr, 0, test_arr.length - 1).every(function(el, idx) {
  return el === answer[idx];
}));

var test_arr = [20, 7, -9, 0, 2, 19];
var answer = [-9, 0, 2, 7, 19, 20];

console.log(quickSort(test_arr, 0, test_arr.length - 1).every(function(el, idx) {
  return el === answer[idx];
}));
