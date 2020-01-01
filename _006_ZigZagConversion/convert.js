/**
 * Time : O(N) ; Space: O(N)
 * @tag : String; Array
 * @by  : Jason Hu
 * @date: March 14, 2018
 ***************************************************************************
 * Description:
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given 
 * number of rows like this: (you may want to display this pattern in a 
 * fixed font for better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given 
 * a number of rows:
 * 
 * string convert(string text, int nRows);
 * convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
 ***************************************************************************
 * {@link https://leetcode.com/problems/zigzag-conversion/}
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows <= 1 || s.length <= 1) {
    return s;
  }
  const zigzag = [];
  for (i = 0; i < numRows; i++) {
    zigzag.push('');
  }
  var flag = 1;
  var pos = 0;
  for (i = 0; i < s.length; i++) {
    zigzag[pos] += s.charAt(i);
    if (pos + flag < 0 || pos + flag >= numRows) {
      flag = -flag;
    }
    pos += flag;
  }
  return zigzag.join('');
};
module.exports = convert;