import input from "./input";

const Day5 = () => {
  return (
    <div>
      <h4>day5: Doesn't He Have Intern-Elves For This?</h4>
      <p>part1: How many strings are nice?:{getFirstPartSolution(input)}</p>
      <p>part2: How many strings are nice?:{getSecondPartSolution(input)}</p>
    </div>
  );
};

export default Day5;

const getFirstPartSolution = (input: string) => {
  let result = 0;
  input.split("\n").forEach((word: string) => {
    const isContainsDisallowedSubString = /ab|cd|pq|xy/g.test(word);
    const isContainsDubbelLetter =
      /(aa|bb|cc|dd|ee|ff|gg|hh|ii|jj|kk|ll|mm|nn|oo|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz){1,}/g.test(
        word
      );
    const vowels = word.match(/[aeiou]/g);
    const isContainsAtLeastThreeVowels = vowels?.length && vowels.length > 2;

    isContainsAtLeastThreeVowels &&
      !isContainsDisallowedSubString &&
      isContainsDubbelLetter &&
      result++;
  });
  return result;
};

const getSecondPartSolution = (input: string) => {
  let result = 0;
  input.split("\n").forEach((word: string) => {
    const isContainsXYXPattern = /(.).\1/g.test(word);
    const isContainsDubbelSubString = /(..).*\1/gm.test(word);

    isContainsXYXPattern && isContainsDubbelSubString && result++;
  });
  return result;
};
