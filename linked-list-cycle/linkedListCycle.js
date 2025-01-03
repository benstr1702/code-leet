/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * class ListNode(val){
 * 		this.val = val;
 * 		this.next = next
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
	if (!head || !head.next) return false;

	// init slow and fast pointers
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (fast === slow) {
			return true;
		}
	}
	return false;
};

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const n1 = new Node(3);
const n2 = new Node(2);
const n3 = new Node(0);
const n4 = new Node(-4);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2;

console.log(hasCycle(n1) === true ? "Congratulations" : "Fuck off");
