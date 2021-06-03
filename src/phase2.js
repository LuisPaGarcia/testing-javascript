const { sum, subtract } = require("../modules/math");
let result, expected;
result = sum(3, 7);
expected = 10;

expect(actual).toBe(expected);

result = subtract(7, 3);
expected = 4;

expect(actual).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
