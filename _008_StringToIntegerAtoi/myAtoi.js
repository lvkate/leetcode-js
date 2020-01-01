/**
 * Time : O(N) ; Space: O(N)
 * @tag : Math; String
 * @by  : Jason Hu
 * @date: July 24, 2018
 * {@link https://leetcode.com/problems/string-to-integer-atoi/}
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();

  var pattern = /^(\-|\+)?[0-9]+/;
  var tmp = pattern.exec(str);

  if (tmp) {
    var num = Number(tmp[0]);
    if (num < -2147483648)
      return -2147483648;
    if (num > 2147483647)
      return 2147483647;
    return num;
  }

  return 0;
};
console.log(myAtoi('-999999999999999999999999999999999'));
module.exports = myAtoi;