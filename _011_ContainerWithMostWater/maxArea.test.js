const maxArea = require("./maxArea");

describe("maxArea", () => {
  const cases = [
    {
      arg1: [],
      result: 0
    },
    {
      arg1: [1],
      result: 0
    },
    {
      arg1: [1, 2, 3, 4, 5],
      result: 6
    },
    {
      arg1: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      result: 49
    },
    {
      arg1: [2, 3, 10, 5, 7, 8, 9],
      result: 36
    },
    {
      arg1: [2, 4, 2, 3, 2, 100, 100, 2, 3],
      result: 100
    }
  ];

  cases.forEach(({ arg1, result }) => {
    test(`[${arg1}] -> ${result}`, () => {
      expect(maxArea(arg1)).toEqual(result);
    });
  });
});
