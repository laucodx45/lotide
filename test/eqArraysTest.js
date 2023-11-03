const assert = require('chai').assert;
const {eqArrays} = require('../index');

describe("#eqArrays", () => {

  it("returns false for [1, 2, 3] and [1, 3, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 3, 3]), false);
  });

  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([], [1 , 2, 3]), false);
  });

  it("returns true for [] and []", () => {
    assert.strictEqual(eqArrays([], []), true);
  });

  it("returns false if one of the argument is not an array", () => {
    assert.strictEqual(eqArrays([], "hi"), false);
  });

});