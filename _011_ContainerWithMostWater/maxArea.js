/**
 * Time : O(m+n) ; Space: O(m+n)
 * @tag : Linked List
 * @by  : Jason Hu
 * @date: Jan 11, 2020
 ***************************************************************************
 * Given n non-negative integers a1, a2, ..., an , where each represents a point
 * at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
 * of line i is at (i, ai) and (i, 0). Find two lines, which together with
 * x-axis forms a container, such that the container contains the most water.
 *
 * Note: You may not slant the container and n is at least 2.
 * Example:
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 ***************************************************************************
 * {@link https://leetcode.com/problems/container-with-most-water/}
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    if (area < calcArea(height, left, right)) {
      area = calcArea(height, left, right);
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return area;
};

var calcArea = function(height, left, right) {
  return (
    (right - left) *
    (height[left] < height[right] ? height[left] : height[right])
  );
};

module.exports = maxArea;
