class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}

function convertArrayToLinkedList(array) {
	if (array.length === 0) return null;
	let head = new ListNode(array[0]);
	let current = head;

	for (let i = 0; i < array.length; i++) {
		current.next = new ListNode(array[i]);
		current = current.next;
	}

	return head;
}

module.exports = {
	convertArrayToLinkedList,
	ListNode,
};
