const twoSum = require('./index');

test('twoSum function exists', () => {
    expect(twoSum).toBeDefined();
});

test('twoSum returns an array', () => {
    expect(twoSum([2, 5, 5, 11], 10)).toEqual([1, 2]);
});

test('twoSum returns an array', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test('twoSum returns an array', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});