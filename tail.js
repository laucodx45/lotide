const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(array) {
  if (!Array.isArray(array)) {
    console.log('Input is not an array');
    return;
  }
  return array.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(result.length, words.length - 1);
assertEqual((tail(["One"]).length), 0);