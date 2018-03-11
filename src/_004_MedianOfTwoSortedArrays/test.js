const findMedianSortedArrays = require('./index');

test('findMedianSortedArrays function exists', () => {
  expect(findMedianSortedArrays).toBeDefined();
});

test('median of [1,3] and [2] is 2.0', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toEqual(2.0);
});

test('median of [1,2] and [3,4] is 2.5', () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5);
});