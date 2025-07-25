/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
	/**
	 * Constructs a new ListNode.
	 * @param {*} val - The value of the node. Defaults to 0 if not provided.
	 * @param {ListNode} next - The next node in the list. Defaults to null if not provided.
	 */
	constructor(val = 0, next = null) {
		this.val = val; // Stores the value of the current node.
		this.next = next; // Stores a reference to the next node in the linked list.
	}
}

/**
 * Converts an array into a singly-linked list.
 * @param {Array} array - The array to convert.
 * @returns {ListNode} The head of the newly created linked list, or null if the array is empty.
 */
function convertArrayToLinkedList(array) {
	// If the input array is empty, return null as there's no list to create.
	if (array.length === 0) return null;

	// Create the head of the linked list with the first element of the array.
	let head = new ListNode(array[0]);
	// Initialize a 'current' pointer to the head, which will be used to traverse and build the list.
	let current = head;

	// Loop through the array starting from the second element (index 1),
	// as the first element was already used to create the head.

	for (let i = 1; i < array.length; i++) {
		// Create a new ListNode for the current array element.
		current.next = new ListNode(array[i]);
		// Move the 'current' pointer to the newly created node.
		current = current.next;
	}

	// Return the head of the constructed linked list.
	return head;
}

// Export the functions and classes so they can be imported and used in other modules.
module.exports = {
	convertArrayToLinkedList, // Exports the function to convert an array to a linked list.
	ListNode, // Exports the ListNode class definition.
};
