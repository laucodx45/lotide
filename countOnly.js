const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

/* countOnly will be given an array and an object.
It will return an object containing counts of everything that the input object listed */

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

/**
 * 
 * @param {*} allItems
 * @param {*} itemsToCount
 * 1. create a object placeholder for the result
 * 2. create a for loop to iterate @param {*} allItems
 * 3. check if the element in allItems has a property value of true in itemsToCount
 * 4. check if result object already have item property, if it does then add one to current value
 * 5. check if results object already have item as property, if not, set it up, assign value of 1 
 * @return {number} count of how many times the same element appears
 */


const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      }

      else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);