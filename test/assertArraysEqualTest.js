const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]); // should pass
assertArraysEqual([1,2,3], [1,2]); // should fail
assertArraysEqual([], []); // should pass
assertArraysEqual(['hi', 'bye'], [2, 3]); // should fail
assertArraysEqual(['hi', 'bye'], ['hi', 'bye']); // should pass
assertArraysEqual(['hi', 'bye'], ['bye', 'hi']); // should fail
