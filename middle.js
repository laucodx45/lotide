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