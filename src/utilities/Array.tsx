export const sumNumberArray = (array: Array<number>) => {
  return array.reduce((sum, item) => sum + item);
};

export const getAllArrayCombinations = (
  names: Array<string>
): Array<Array<string>> => {
  if (names.length === 2) {
    return [
      [names[0], names[1]],
      [names[1], names[0]],
    ];
  } else {
    const result: Array<Array<string>> = [];
    for (let i = 0; i < names.length; i++) {
      const prefix = [names[i]];
      const suffix = [...names];
      suffix.splice(i, 1);
      const suffixes = getAllArrayCombinations(suffix);
      suffixes.map((suffixVariant) => {
        result.push(prefix.concat(suffixVariant));
      });
    }
    return result;
  }
};
