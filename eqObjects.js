const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');

/**
 *
 * @param {*} object1
 * @param {*} object2
 * process
 * Return true if they have the same number of keys, compare the length of the keys array
 * Use a for of loop, if using key of object1 not return truthy then the two object have different value for the key
 * @returns boolean
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

// Test code
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false
