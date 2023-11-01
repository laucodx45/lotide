const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Case 1: function should return [] if input array is empty
assertArraysEqual((middle([])), []);
// Test Case 2: function should return [] since there's only 1 element in array, no middle index
assertArraysEqual((middle([1])), []);
// Test Case 3: function should return [] since there's no middle index
assertArraysEqual((middle([1, 2])), []);
// Test Case 4: function should return [3], middle index is at index 2 with a value of 3
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
// Test Case 5: function should return [2, 4], middle index is at 1 and 2, value of 2 and 4
assertArraysEqual((middle([1, 2, 4, 5])), [2, 4]);
// Test Case 6: function should return [] when input argument is not an Array
assertArraysEqual(middle(""), []);

let testArray = [1, 2, 3, 4];
middle(testArray);
// Test if function modify the original array argument
assertArraysEqual(testArray, [1, 2, 3, 4]);