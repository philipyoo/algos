/*
Merge Sort

Sorting Algorithm
*/

function mergeSort(arr) {
  let mid, left, right;

  if (arr.length <= 1) {
    return arr;
  }

  mid = Math.floor(arr.length / 2);
  left = mergeSort(arr.slice(0, mid));
  right = mergeSort(arr.slice(mid));

  return merging(left, right);
}

function merging(left, right) {
  mergedArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      mergedArray.push(right.shift());
    } else {
      mergedArray.push(left.shift());
    }
  }

  if (left.length > 0) {
    mergedArray = mergedArray.concat(left);
  }
  if (right.length > 0) {
    mergedArray = mergedArray.concat(right);
  }

  return mergedArray;
}

//////////////////////////////////////////////////
// TESTS: [All should return `true`]

var test_arr = [5, 9, 0, 2];
var answer = [0, 2, 5, 9];

console.log(mergeSort(test_arr).every(function(el, idx) {
  return el === answer[idx];
}));

var test_arr = [20, 7, -9, 0, 2, 19];
var answer = [-9, 0, 2, 7, 19, 20];

console.log(mergeSort(test_arr).every(function(el, idx) {
  return el === answer[idx];
}));