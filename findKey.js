/**
 * findKey takes in an object and callback and returns the first key that meets the criteria specified in callback.
 * @param {object} object
 * @param {*} callbackFn
 * @returns the first key that meets the criteria specified in callback
 */

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;