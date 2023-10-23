const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

/**
 * 
 * @param {*} object
 * @param {*} value
 * process
 * Use Object.keys() to obtain the array containing each key in object
 * Use a for of loop to iterate the keys of object
 * if the value called using key equals to the input value argument
 * @returns key that contains the input value
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

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// Test Case 1: function should return key "drama"
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// Test Case 2: function should return undefined, "That '70s Show" is not a value input object argument
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);