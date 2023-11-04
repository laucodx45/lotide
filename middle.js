/**
 * middle takes in an array and returns middle most element of the array.
 * @param {array} array
 * @returns {array} middle most element of the array.
 */

const middle = function(array) {
  // Placeholders
  let resultArr = [];
  let middleIndex = Math.floor(array.length / 2);

  // check if function have no argument
  if (!array || !Array.isArray(array)) return [];
  
  if (array.length <= 2) {
    return [];
  } else {
    // if length is Odd
    if (array.length % 2 !== 0) {
      resultArr.push(array[middleIndex]);
    } else {
      resultArr.push(array[middleIndex - 1], array[middleIndex]);
    }
  }
  return resultArr;
};

module.exports = middle;