const convert = require('./index');

test('ZigZagConversion function exists', () => {
  expect(convert).toBeDefined();
});

test('PAYPALISHIRING => PAHNAPLSIIGYIR', () => {
  expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
});

test('ABCDEFGHI => AGBFHCEID', () => {
  expect(convert('ABCDEFGHI', 4)).toBe('AGBFHCEID');
});
