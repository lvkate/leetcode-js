/**
 * Time : O(m+n) ; Space: O(m+n)
 * @tag : Linked List;
 * @by  : Jason Hu
 * @date: Feb 7, 2018
 ***************************************************************************
 * Description:
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 ***************************************************************************
 * {@link https://leetcode.com/problems/add-two-numbers/ }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const L = require('./listNode');
const ListNode = L.ListNode;
const intToListNode = L.intToListNode;
const listNodeToInt = L.listNodeToInt;
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * Initialize current node to dummy head of the returning list.
 * Initialize carry to 0.
 * Initialize p and q to head of l1 and l2 respectively.
 * Loop through lists l1 and l2 until you reach both ends.
 * Set x to node p's value. If p has reached the end of l1, set to 0.
 * Set y to node q's value. If q has reached the end of l2, set to 0.
 * Set sum = x + y + carry.
 * Update carry = sum / 10.
 * Create a new node with the digit value of (sum mod 10) and set it 
 * to current node's next, then advance current node to next.
 * Advance both p and q.
 * Check if carry = 1, if so append a new node with digit 1 
 * to the returning list.
 * Return dummy head's next node.
 **/

// var addTwoNumbers = function (l1, l2) {
//     var head = new ListNode(0);
//     var cur = head;
//     var carry = 0;
//     var p = l1;
//     var q = l2;
//     while (p !== null || q !== null) {
//         var x = 0;
//         var y = 0;
//         if (p !== null) {
//             x = p.val;
//             p = p.next;
//         }
//         if (q !== null) {
//             y = q.val;
//             q = q.next;
//         }
//         var sum = x + y + carry;
//         carry = sum >= 10 ? 1 : 0;
//         cur.next = new ListNode(sum % 10);
//         cur = cur.next;
//     }
//     if (carry > 0) {
//         cur.next = new ListNode(carry);
//     }
//     return head.next;
// };

var addTwoNumbers = function (l1, l2) {
    var head = new ListNode(0);
    var cur = head;
    var carry = 0;
    var sum = 0;
    while (l1 !== null || l2 !== null || sum === 1) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }
        cur.next = new ListNode(sum);
        cur = cur.next;
        sum = carry;
        carry = 0;
    }

    return head.next;
};

// addTwoNumbers(l1,l2);

module.exports = addTwoNumbers;