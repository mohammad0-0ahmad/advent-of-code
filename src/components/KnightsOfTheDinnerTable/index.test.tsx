const getSolution = require("./index").getSolution;
const defaultInput = require("./index").defaultInput;

test("test", () => {
  /* const names = Object.keys(happinessObject);
const combinations = getAllArrayCombinations(names);
const result = combinations
  .map((i) => [calcHappiness(i, happinessObject), i])
  .sort((a: any, b: any) => b[0] - a[0]);
  return result[0]; */
  expect(getSolution(defaultInput)).toBe([
    "Alice",
    "Bob",
    "Frank",
    "Carol",
    "Eric",
    "David",
    "George",
    "Mallory",
  ]);
});
