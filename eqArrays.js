// Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
/**
 * @param {*} {array} array1
 * @param {*} {array} array2
 * @returns {boolean} true or false, based on a perfect match.
 */
const eqArrays = function(array1, array2) {
  //Do they have the same length? If they don't return false
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
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