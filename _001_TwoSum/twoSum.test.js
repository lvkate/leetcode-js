const twoSum = require("./twoSum");

describe("twoSum", () => {
  const cases = [
    {
      arg1: [2, 5, 5, 11],
      arg2: 10,
      result: [1, 2]
    },
    {
      arg1: [2, 7, 11, 15],
      arg2: 9,
      result: [0, 1]
    },
    {
      arg1: [3, 2, 4],
      arg2: 6,
      result: [1, 2]
    }
  ];

  cases.forEach(({ arg1, arg2, result }) => {
    test(`[${arg1}], ${arg2} -> ${result}`, () => {
      expect(twoSum(arg1, arg2)).toEqual(result);
    });
  });
});
