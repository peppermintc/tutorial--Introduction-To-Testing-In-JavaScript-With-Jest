const { expect } = require("@jest/globals");
const cloneArray = require("./cloneArray");

test("properlly clones array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
