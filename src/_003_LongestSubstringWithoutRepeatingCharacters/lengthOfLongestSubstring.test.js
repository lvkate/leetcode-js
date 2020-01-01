const lengthOfLongestSubstring = require('./lengthOfLongestSubstring');

test('lengthOfLongestSubstring function exists', () => {
  expect(lengthOfLongestSubstring).toBeDefined();
});

test('Given "abcabcbb", the answer is "abc", which the length is 3', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
});

test('Given "bbbbb", the answer is "b", with the length of 1', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
});

test('Given "pwwkew", the answer is "wke", with the length of 3', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
});