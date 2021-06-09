import { calcHappiness, defaultInput, getCombinationOfTheHighestPossibleTotalHappiness } from "../KnightsOfTheDinnerTable";
import { getAllArrayCombinations } from "../../utilities/Array";

test("getSolution", () => {
  const names = Object.keys(defaultInput);
  const combinations = getAllArrayCombinations(names);
  const result = combinations
    .map((i) => [calcHappiness(i, defaultInput), i])
    .sort((a: any, b: any) => b[0] - a[0]);
  const highestPossibleTotalHappiness = result[0][0];
  expect(calcHappiness(getCombinationOfTheHighestPossibleTotalHappiness(defaultInput), defaultInput)).toEqual(
    highestPossibleTotalHappiness
  );
});
