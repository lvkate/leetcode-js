const reverse = require('./index');

test('reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('reverse positive numbers', () => {
  expect(reverse(123)).toBe(321);
  expect(reverse(120)).toBe(21);
  expect(reverse(1200)).toBe(21);
});

test('reverse negative numbers', () => {
  expect(reverse(-123)).toBe(-321);
  expect(reverse(-120)).toBe(-21);
  expect(reverse(-1200)).toBe(-21);
});

test('reverse zero and overflow', () => {
  expect(reverse(0)).toBe(0);
  expect(reverse(7463847412)).toBe(2147483647);
  expect(reverse(8463847412)).toBe(0);
  expect(reverse(-8463847412)).toBe(-2147483648);
  expect(reverse(-9463847412)).toBe(0);
});