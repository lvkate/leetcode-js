const addTwoNumbers = require('./index');
const L = require('./listNode');
const ListNode = L.ListNode;
const intToListNode = L.intToListNode;
const listNodeToInt = L.listNodeToInt;
test('addTwoNumbers function exists', () => {
  expect(addTwoNumbers).toBeDefined();
});

test('addTwoNumbers((2 -> 4 -> 3) + (5 -> 6 -> 4)) === 7 -> 0 -> 8', () => {
  var l1 = intToListNode(342);
  var l2 = intToListNode(465);
  var ans = addTwoNumbers(l1, l2);
  console.log(ans);
  expect(addTwoNumbers(l1, l2)).toEqual(intToListNode(807));
});

test('addTwoNumbers([0],[0]) === [0]', () => {
  var l1 = intToListNode(0);
  var l2 = intToListNode(0);
  var ans = addTwoNumbers(l1, l2);
  console.log(ans);
  expect(addTwoNumbers(l1, l2)).toEqual(intToListNode(0));
});