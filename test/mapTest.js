const assert = require('chai').assert;
const {map} = require('../index');

describe("#map", () => {

  const testWords = ['ground', 'control', 'to', 'major', 'tom'];

  it("returns ['round', 'ontrol', 'o', 'ajor', 'om'] when callback Fn is word => word.slice(1)", () => {
    assert.deepEqual(map(testWords, word => word.slice(1)), ['round', 'ontrol', 'o', 'ajor', 'om']);
  });

  it("returns ['g', 'c', 't', 'm', 't'] when callbackFn is word => word[0]", () => {
    assert.deepEqual(map(testWords, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("returns [6, 7, 2, 5, 3], the length of each word in testWords, when callbackFn is word => word.length", () => {
    assert.deepEqual(map(testWords, word => word.length), [6, 7, 2, 5, 3]);
  });

});
