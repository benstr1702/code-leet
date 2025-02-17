const {
	convertArrayToLinkedList,
	ListNode,
} = require("../util/convertArrayToListNode");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
	let carry = 0;
	let dummyNode = new ListNode();
	let current = dummyNode;

	while (l1 || l2 || carry) {
		const x = l1 ? l1.val : 0;
		const y = l2 ? l2.val : 0;
		const sum = x + y + carry;

		carry = Math.floor(sum / 10);

		current.next = new ListNode(sum % 10);
		current = current.next;

		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}
	return dummyNode.next;
};

const l1 = convertArrayToLinkedList([2, 4, 3]);
const l2 = convertArrayToLinkedList([5, 6, 4]);
