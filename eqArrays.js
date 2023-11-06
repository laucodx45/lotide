/**
 * eqArrays takes in two arrays and returns true or false, based on a perfect match.
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
  
  for (let i = 0; i < array1.length; i++) {
    // if element is an array
    if (Array.isArray(array1[i])) {
      // element is an array, if the output of recursion is false then return false, array1 and 2 is not equal
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;