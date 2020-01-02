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
 * Time : O(N^2) ; Space : O(1)
 * Brute force method
 * Loop through each element x and find if there is another value that
 * equals to target - x
 */
// var twoSum = function (nums, target) {
//     for (i = 0; i < nums.length; i++) {
//         for (j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i,j];
//             }
//         }
//     }
//     throw "No two sum solution";
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time : O(N) ; Space: O(N)
 * Two-pass Hash Table
 * A simple implementation uses two iterations. In the first iteration,
 * we add each element's value and its index to the table. Then,
 * in the second iteration we check if each element's complement
 * (target - nums[i]) exists in the table. Beware that
 * the complement must not be nums[i] itself!
 */
// var twoSum = function (nums, target) {
//     var myMap = new Map();
//     for (i = 0; i < nums.length; i++) {
//         myMap.set(nums[i],i);
//     }
//     for (i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (myMap.has(complement) && myMap.get(complement) != i) {
//             return [i,myMap.get(complement)];
//         }
//     }
//     throw "No two sum solution";
// }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time : O(N) ; Space: O(N)
 * One-pass Hash Table
 * While we iterate and inserting elements into the table, we also
 * look back to check if current element's complement already exists
 * in the table. If it exists, we have found a solution and return immediately.
 */
var twoSum = function(nums, target) {
  const myMap = new Map();
  for (i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (myMap.has(complement)) {
      return [myMap.get(complement), i];
    }
    myMap.set(nums[i], i);
  }
  throw "No two sum solution";
};
module.exports = twoSum;
