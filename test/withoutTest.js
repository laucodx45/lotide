const {assert}= require('chai');
const {without}= require('../index');

describe("#Without", () => {

  it("returns [2, 3] when sourceArr is [1, 2, 3] and itemsToRemoveArr [2, 3]", () => {
    const sourceArr = [1, 2, 3];
    const itemsToRemoveArr = [1];
    assert.deepEqual(without(sourceArr, itemsToRemoveArr), [2, 3]);
  });

  it("returns [1, 2] when sourceArr is [1, 2, 3] and itemsToRemoveArr [3]", () => {
    const sourceArr = [1, 2, 3];
    const itemsToRemoveArr = [3];
    assert.deepEqual(without(sourceArr, itemsToRemoveArr), [1, 2]);
  });

  it("returns ['1', '2'] when sourceArr is ['1', '2', '3'] and itemsToRemoveArr [1, 2, '3']", () => {
    const sourceArr = ['1', '2', '3'];
    const itemsToRemoveArr = [1, 2, '3'];
    assert.deepEqual(without(sourceArr, itemsToRemoveArr), ['1', '2']);
  });

  it("sourceArr ['hello', 'bye', 'what'] should still be the same after being passed through without function", () => {
    const sourceArr = ['hello', 'bye', 'what'];
    const itemsToRemoveArr = ['hello'];
    without(sourceArr, itemsToRemoveArr);
    assert.deepEqual(sourceArr, ['hello', 'bye', 'what']);
  });

});