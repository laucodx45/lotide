const assert = require('chai').assert;
const {countOnly} = require('../index');

describe("#countOnly", () => {
  const firstNamesForTest = [
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

  it("returns { Jason: 1}, Agouhanna is in array allItem, Agouhanna was assigned to value false, should't be included in output", () => {
    const expectedResult = { Jason: 1};
    assert.deepEqual(countOnly(firstNamesForTest, { Jason: true, Agouhanna: false}), expectedResult);
  });

  it("returns {Fang: 2} since Fang appeared 2 times in array allItem and Fang was assigned true value in itemsToCount", () => {
    const expectedResult = { Fang: 2};
    assert.deepEqual(countOnly(firstNamesForTest, { Fang: true}), expectedResult);
  });

  it("returns empty object, the name Karima in itemsToCount is not in array all item", () => {
    const expectedResult = {};
    assert.deepEqual(countOnly(firstNamesForTest, {Karima: true}), expectedResult);
  });

});
