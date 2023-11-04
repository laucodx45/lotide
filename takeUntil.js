/**
 * takeUntil takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
 * @param {array} array
 * @param {*} callbackFn
 * @returns a slice of the array based on the criteria specified in the callback.
 */
const takeUntil = function(array, callback) {
  // ...
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
};

module.exports = takeUntil;