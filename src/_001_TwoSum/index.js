/**
 * Time : O(N) ; Space: O(N)
 * @tag : Array; Hash Table
 * @by  : Jason Hu
 * @date: Feb 7, 2018
 ***************************************************************************
 * Description:
 * Given an array of integers, return indices of the two numbers such that
 * they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you 
 * may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 ***************************************************************************
 * {@link https://leetcode.com/problems/two-sum/ }
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var sums = [0, 0];
    for (i = 0; i < nums.length; i++) {
        for (j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                sums[0] = i;
                sums[1] = j;
                return sums;
            }
        }
    }
    return sums;
};

module.exports = twoSum;