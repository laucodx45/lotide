const assert = require('chai').assert;
const {letterPositions} = require('../index');

describe("#letterPositions", () => {
  
  const testString = "hello";
  const testString2 = "hello world";

  it("returns { h: [0], e: [1], l: [2, 3], o: [4] } when input string is 'hello'", () => {
    assert.deepEqual(letterPositions(testString), { h: [0], e: [1], l: [2, 3], o: [4] });
  });

  it("returns { h: [0], e: [1], l: [2, 3, 9], o: [4, 7], w: [6], r: [8], d: [10]} when input string is 'hello world'", () => {
    assert.deepEqual(letterPositions(testString2), { h: [0], e: [1], l: [2, 3, 9], o: [4, 7], w: [6], r: [8], d: [10]});
  });

});