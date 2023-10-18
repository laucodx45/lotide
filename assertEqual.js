// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 [${actual}] !== [${expected}]`);
  }
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, 2));
console.log(assertEqual(2, 2));