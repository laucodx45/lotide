/**
 * countOnly will be given an array and an object, returns an object containing counts of everything that the input object listed
 * @param {*} array allItems - A collection of items in an array.
 * @param {*} object itemsToCount - A specific subset of items to count in the array.
 * @return An object that contains the count of the specified subset of items.
 **/

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;