/**
 * map will return a new array based on the results of the callback function
 * @param {array} array
 * @param {*} callbackFn
 * @returns a new array based on the results of the callback function
 */

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;