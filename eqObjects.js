const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

/*Implement the definition for function eqObjects which will take in two objects
and returns true or false, based on a perfect match
Two objects are equal when:
1. They have the same number of keys
2. The value for each key in one obj is the same as value for the same key in the other obj

*/
/**
 *
 * @param {*} object1
 * @param {*} object2
 * process
 * Check if they have the same number of keys, compare the length of the keys array
 * Use a for of loop, if using key of object1 not return truthy then the two object have different value for the key
 * @returns boolean
 */

const eqObjects = function(object1, object2) {
  const keyOfObj1 = Object.keys(object1);
  const keyOfObj2 = Object.keys(object2);

  if (keyOfObj1.length !== keyOfObj2.length) {
    return false;
  } else {
    for (const key of keyOfObj1) {
      if (Array.isArray(object1[key])) {
        if (object1[key].length !== object2[key].length) {
          return false;
        } else {
          return eqArrays(object1[key], object2[key]);
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false
