/**
 * Time : O(log (m+n)) ; Space: O(N)
 * @tag : Array; Binary search
 * @by  : Jason Hu
 * @date: Feb 11, 2018
 ***************************************************************************
 * Description:
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity 
 * should be O(log (m+n)).
 * 
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * Plus:
 * median is the middle value in an ordered integer list. If the size of 
 * the list is even, there is no middle value. So the median is the mean 
 * of the two middle value.
 * 
 * Examples:
 * 
 * [2,3,4] , the median is 3
 * 
 * [2,3], the median is (2 + 3) / 2 = 2.5
 * 
 * For this problem, what you should do is find the median after merging 
 * this two ordered array.
 ***************************************************************************
 * {@link https://leetcode.com/problems/median-of-two-sorted-arrays/ }
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
};
module.exports = findMedianSortedArrays;