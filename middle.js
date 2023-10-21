const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

/**
 * inpupt @param {Array}
 * process
 * set up a placeholder array
 * 1. if array length <= 2, simply return an empty array
 * 2. if array length is odd, the middle index will be Math.floor(array.length / 2)
 * 3. if array length is even, there's 2 middle index, they will be Math.floor(array.length / 2) and - 1 index
 * output @return {Array} middle
 */

const middle = function(array) {
  // Placeholders
  let resultArr = [];
  let middleIndex = Math.floor(array.length / 2);

  // check if function have no argument
  if (!array) {
    return [];
  }

  if (array.length <= 2) {
    return [];
  }

  // if array length is odd
  else {
    if (array.length % 2 !== 0) {
      resultArr.push(array[middleIndex]);
    }
  
    // if array length is even
    else {
      resultArr.push(array[middleIndex - 1], array[middleIndex]);
    }
  }
  return resultArr;
};

// Test Case 1: function should return [] if input array is empty
assertArraysEqual((middle([])), []);
// Test Case 2: function should return [] since there's only 1 element in array, no middle index
assertArraysEqual((middle([1])), []);
// Test Case 3: function should return [] since there's no middle index
assertArraysEqual((middle([1, 2])), []);
// Test Case 4: function should return [3], middle index is at index 2 with a value of 3
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
//  Test Case 5: function should return [2, 4], middle index is at 1 and 2, value of 2 and 4
assertArraysEqual((middle([1, 2, 4, 5])), [2, 4]);

let testArray = [1, 2, 3, 4];
middle(testArray);
// Test if function modify the original array argument
assertArraysEqual(testArray, [1, 2, 3, 4]);