/**
 * Time : O(N*N) ; Space: O(N)
 * @tag : String; Dynamic Programming
 * @by  : Jason Hu
 * @date: March 13, 2018
 ***************************************************************************
 * Description:
 * Given a string s, find the longest palindromic substring in s. You may 
 * assume that the maximum length of s is 1000.
 * 
 * Example:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * Example:
 * Input: "cbbd"
 * Output: "bb"
 ***************************************************************************
 * {@link https://leetcode.com/problems/longest-palindromic-substring/ }
 */

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  if (!s || s.length <= 1) {
    return s;
  }
  let longest = s.slice(0, 1);
  let l = 0;
  let mid = 0;

  for (i = 0; i < s.length; i++) {
    // get longest palindrome with center of i
    let tmp = expand(s, i, i);
    if (tmp.length > longest.length) {
      longest = tmp;
    }

    // get longest palindrome with center of i, i+1
    tmp = expand(s, i, i + 1);
    if (tmp.length > longest.length) {
      longest = tmp;
    }
  }
  return longest;
};

const expand = (s, begin, end) => {
  while (begin >= 0 && end <= s.length - 1 && s.charAt(begin) == s.charAt(end)) {
    begin--;
    end++;
  }
  return s.slice(begin + 1, end);
};
longestPalindrome('cbba');
module.exports = longestPalindrome;