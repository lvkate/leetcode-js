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
 * we name the first and last element of num1 is a and b, m and n for num2
 * so a <= b, m <= n
 * there will be several relationships between num1 and num2
 * 1. b <= m same as n <= a if we change the order of them
 * 2. a <= m and b >= m
 * 3. a <= m and b >= n
 *
 * we can find the median of one sorted array by get element at the median
 * index of an odd array. And the sum of an even array's median 2 elements
 * divide by 2. The complexity is O(1)
 * so 1. 
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let maxlength = nums1.length + nums2.length;
  let nums3 = [];
  let n1 = 0;
  let n2 = 0;
  let flag1 = false;
  let flag2 = false;
  while ((nums1[n1] || nums2[n2]) && nums3.length <= maxlength / 2) {
    flag1 = nums1[n1] === undefined
    flag2 = nums2[n2] === undefined
    if (flag2 || nums1[n1] < nums2[n2]) {
      nums3.push(nums1[n1]);
      n1++;
    } else if (flag1 || nums2[n2] < nums1[n1]) {
      nums3.push(nums2[n2]);
      n2++;
    } else {
      nums3.push(nums1[n1], nums2[n2])
      n1++;
      n2++;
    }
  }
  console.log(nums3);
  return maxlength % 2 === 1 ? nums3[(maxlength + 1) / 2 - 1] : (nums3[maxlength / 2 - 1] + nums3[(maxlength / 2)]) / 2
};
module.exports = findMedianSortedArrays;