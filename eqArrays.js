const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

/**
 * const eqArrays = function()
 * @param1 {Array[]} @param2 {Array[]} input
 * process: compare the two arrays
 * 1. if array length is not the same, then we can assume that it is not the same array, return false
 * 2. use a for loop?
 * 3. array method .includes()
 * @return Boolean whether the array is equal to each other
 */

const eqArrays = function(array1, array2) {

  //Do they have the same length? If they don't return false
  if (array1.length !== array2.length) {
    return false;
  }

  //When array length is the same, we can compare array1 and array 2 using one for loop
  //If the for loop encounter one element that !== to the other array, it return false
  //If that never happens that means all the element are the same, else we set result to true
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);