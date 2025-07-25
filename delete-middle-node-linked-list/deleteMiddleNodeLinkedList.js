const { convertArrayToLinkedList } = require("../util/convertArrayToListNode");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteMiddle = (head) => {
	if (!head.next) return null;
	let slow = (fast = head);
	while (fast && fast.next) {
		prev = slow;
		slow = slow.next;
		fast = fast.next.next;
	}
	// we find the mid
	prev.next = slow.next;
	return head;
};

// head
const head = convertArrayToLinkedList([1, 3, 4, 7, 1, 2, 6]);
deleteMiddle(head);
