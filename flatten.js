/**
 * flatten take in an array containing elements
including nested arrays of elements, and return a "flattened" version of the array
 * @param {array} array
 * @returns a "flattened" version of the array, array without sub-array
 */

const flatten = function(array) {
  // Placeholder, Result Arr stores flatten array
  let resultArr = [];

  // For loop to iterate the array
  for (let i = 0; i < array.length; i++) {

    // If the element in the array is not an array then push the element into resultArr
    if (!Array.isArray(array[i])) {
      resultArr.push(array[i]);
    } else {
      // else, the element is an array, combine the array with resultArr
      resultArr = resultArr.concat(array[i]);
    }
  }
  return resultArr;
};

module.exports = flatten;