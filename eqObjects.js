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
    // Check if the value is an array
    if (Array.isArray(object1[key])) {
      // if the value array is not equal, return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } // if the value of the key in obj1 is not equal to obj2 return false
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;