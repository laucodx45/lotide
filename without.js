/**
 * without takes in a source array and an itemsToRemove
 * @param {array} itemsToRemoveArr
 * @param {array} sourceArr
 * @returns only the items from the source array that are not in the itemsToRemove array.
 */

const without = function(sourceArr, itemsToRemoveArr) {
  let result = [];
  // Use for loop
  for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemoveArr.includes(sourceArr[i])) {
      result.push(sourceArr[i]);
    }
  }
  return result;
};

module.exports = without;