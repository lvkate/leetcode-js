/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
//Transform a ListNode to Integer
var listNodeToInt = function (l1) {
  var str1 = "";
  str1 += l1.val;
  while (l1.next != null) {
    l1 = l1.next;
    str1 = l1.val + str1;
  }
  return parseInt(str1);
}
// ListNode.prototype.toInt = function() {
//     var str1 = "";
//     str1 += this.val;
//     while (this.next != null) {
//         this = this.next;
//         str1 = this.val + str1;
//     }
//     return parseInt(str1);
// }

//Transform an integer to ListNode
var intToListNode = function (num) {
  var head = new ListNode(0);
  var numString = num + '';
  var numStringArray = numString.split('');
  for (let digit of numStringArray) {
    if (head.next === null && head.val === 0) {
      head.val = parseInt(digit);
    } else {
      head = head.push(parseInt(digit));
    }
    //console.log(head);
  }
  return head;
}

//Push a new node of val to the head of the ListNode
ListNode.prototype.push = function (val) {
  var newNode = new ListNode(val);
  newNode.next = this;
  return newNode;
}

module.exports = {
  ListNode,
  listNodeToInt,
  intToListNode
};