const eqArrays = require('./eqArrays');
/**
 * eqObjects takes in 2 objects and return true if they are equal and false otherwise.
 * @param {object} object1
 * @param {object} object2
 * @returns true if they are equal and false otherwise.
 */

const eqObjects = function(object1, object2) {
  // Keys of the object in arguments in array
  const keyOfObj1 = Object.keys(object1);
  const keyOfObj2 = Object.keys(object2);

  if (keyOfObj1.length !== keyOfObj2.length) {
    return false;
  }

  for (const key of keyOfObj1) {
    // check if object[key] is an object/array
    if (typeof object1[key] === 'object') {
      // if not an array, then it's an object for sure
      if (!Array.isArray(object1[key])) {
        // if passing the object into eqObject return false then return false
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;