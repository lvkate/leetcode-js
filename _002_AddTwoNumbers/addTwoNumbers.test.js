const addTwoNumbers = require("./addTwoNumbers");
const L = require("./listNode");
const ListNode = L.ListNode;
const intToListNode = L.intToListNode;
const listNodeToInt = L.listNodeToInt;

describe("addTwoNumbers", () => {
  const cases = [
    {
      arg1: 342,
      arg2: 465,
      result: 807
    },
    {
      arg1: 0,
      arg2: 0,
      result: 0
    }
  ];

  cases.forEach(({ arg1, arg2, result }) => {
    test(`${arg1},${arg2} -> ${result}`, () => {
      expect(addTwoNumbers(intToListNode(arg1), intToListNode(arg2))).toEqual(
        intToListNode(result)
      );
    });
  });
});
