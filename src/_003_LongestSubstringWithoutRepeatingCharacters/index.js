/**
 * Time : O(m+n) ; Space: O(m+n)
 * @tag : String; HashSet; Sliding Window
 * @by  : Jason Hu
 * @date: Feb 9, 2018
 ***************************************************************************
 * Description:
 * Given a string, find the length of the longest substring 
 * without repeating characters.
 * 
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, 
 * "pwke" is a subsequence and not a substring.
 ***************************************************************************
 * {@link https://leetcode.com/problems/longest-substring-without-repeating-characters/ }
 */

/**
 * @param {string} s
 * @return {number}
 * We use HashSet to store the characters in current window [i, j)
 * (j = i initially). Then we slide the index j to the right. 
 * If it is not in the HashSet, we slide j further. 
 * Doing so until s[j] is already in the HashSet. 
 * At this point, we found the maximum size of substrings 
 * without duplicate characters start with index i. 
 * If we do this for all i, we get our answer.
 */
var lengthOfLongestSubstring = function (s) {
  var max = 0;
  for (i = 0; i < s.length; i++) {
    var set = new Set();
    var j = i;
    while (j < s.length && !set.has(s[j])) {
      set.add(s[j]);
      j++;
    }
    //max = max < j - i ? j - i : max;
    if (max < j - i) {
      max = j - i;
      // console.log(set);
      // console.log('i=' + i);
      // console.log('j=' + j);
    }
  }
  return max;
};

module.exports = lengthOfLongestSubstring;