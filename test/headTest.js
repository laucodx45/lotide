const assert = require('chai').assert;
const {head} = require('../index');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns Hello for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns \"Hi\" for [\"Hi\"]", () => {
    assert.strictEqual(head(["Hi"]), "Hi");
  });

  it("returns undefined for \"Hi\"", () => {
    assert.strictEqual(head("Hi"), undefined);
  });
});