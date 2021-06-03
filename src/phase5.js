const { sum, sumAsync, subtract, subtractAsync } = require("../modules/math");

test("sum add numbers", async () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test("sum add numbers", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
