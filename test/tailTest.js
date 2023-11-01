const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result[0], "Lighthouse"); // testing if the head function returns the new start index for tail array
assertEqual(result[1], "Labs"); // second index of the tail array
assertEqual(result.length, words.length - 1); // checking if the length is good
assertEqual((tail(["One"]).length), 0); // checking whether the function still works with array with only one element
assertEqual((tail([]).length), 0); // Input array with zero element