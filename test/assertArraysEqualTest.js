const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]); // should pass
assertArraysEqual([1,2,3], [1,2]); // should fail
assertArraysEqual([], []); // should pass, both arrays are empty
assertArraysEqual(['hi', 'bye'], [2, 3]); // should fail, these arrays have the same length but different values
assertArraysEqual(['hi', 'bye'], ['hi', 'bye']); // should pass
assertArraysEqual(['hi', 'bye'], ['bye', 'hi']); // Expecting this test to fail due to the order of elements