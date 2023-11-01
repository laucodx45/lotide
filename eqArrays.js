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
  //compare array1 to array 2 using a loop
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;