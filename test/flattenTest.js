const assert = require('chai').assert;
const {flatten} = require('../index');

describe("#flatten", () => {

  it("returns [1, 2 , 3, 4, 5] when input is [1, 2, [3, 4], 5]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5]), [1, 2, 3, 4, 5]);
  });

  it("returns [1, 2, 3, 4] when input is [1, 2, 3, 4]", () => {
    assert.deepEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
  });

  it("returns [1, '2', '3', 4] when input is [1, ['2', '3'], 4]", () => {
    assert.deepEqual(flatten([1, ['2', '3'], 4]), [1, '2', '3', 4]);
  });

  it("returns [1, 2, [3, 4], 5], flatten function should not modify original array argument", () => {
    let testArray = [1, 2, [3, 4], 5];
    flatten(testArray);
    assert.deepEqual(testArray, [1, 2, [3, 4], 5]);
  });
  
});