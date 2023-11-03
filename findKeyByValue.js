// function that takes in an object and a value and returns the first key that corresponds to that value.
/**
 * findKeyByValue takes in an object and a value and returns the first key that corresponds to that value.
 * @param {object} object
 * @param {*} value
 * @returns the first key that corresponds to that value.
 */
const findKeyByValue = function(object, value) {

  const keys = Object.keys(object);

  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;