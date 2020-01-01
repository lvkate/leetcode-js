const longestPalindrome = require('./longestPalindrome');

test('longestPalindrome function exists', () => {
  expect(longestPalindrome).toBeDefined();
});

test('"" => ""', () => {
  expect(longestPalindrome('')).toBe('');
});

test('"a" => "a"', () => {
  expect(longestPalindrome('a')).toBe('a');
});

test('"ab" => "a" or "b"', () => {
  expect(longestPalindrome('ab')).toEqual(expect.stringMatching(/^[ab]$/));
});

test('"babad" => "bab" or "aba"', () => {
  expect(longestPalindrome('babad')).toEqual(expect.stringMatching(/^bab$|^aba$/));
});

test('"cbba" => "bb"', () => {
  expect(longestPalindrome('cbba')).toBe('bb');
});

test('"cbbc" => "cbbc"', () => {
  expect(longestPalindrome('cbbc')).toBe('cbbc');
});

test('"abcba" => "abcba"', () => {
  expect(longestPalindrome('abcba')).toBe('abcba');
});