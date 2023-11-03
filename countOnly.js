/* countOnly will be given an array and an object.
It will return an object containing counts of everything that the input object listed */
/**
 * @param {*} allItems collection of items in array
 * @param {*} itemsToCount specific subset of items to keep count in return object
 * @return {number} returns an object that contain count of the specific subset
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