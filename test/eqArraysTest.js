const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true);
// if input argument is not an array, function should return false;
assertEqual(eqArrays("hi", [1, 2, 3]), false);