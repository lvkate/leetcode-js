/**
 * Time : O(N) ; Space: O(N)
 * @tag : String; Array
 * @by  : Jason Hu
 * @date: March 14, 2018
 ***************************************************************************
 * Description:
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * Input: 123
 * Output:  321
 * 
 * Example 2:
 * Input: -123
 * Output: -321
 * 
 * Example 3:
 * Input: 120
 * Output: 21
 * 
 * Note:
 * Assume we are dealing with an environment which could only hold integers 
 * within the 32-bit signed integer range. For the purpose of this problem, 
 * assume that your function returns 0 when the reversed integer overflows.
 ***************************************************************************
 * {@link https://leetcode.com/problems/reverse-integer/}
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const MAX_INT = -1 >>> 1;
  const MIN_INT = -1 << 31;
  let reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  return (reversed > MAX_INT || reversed < MIN_INT) ? 0 : reversed;
};

module.exports = reverse;