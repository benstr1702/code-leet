# 2095. Delete the Middle Node of a Linked List

### Difficulty: Medium

## Problem Overview

You are given the head of a singly linked list. The task is to delete the middle node and return the head of the modified linked list.

The middle node of a linked list of size n is defined as the ⌊n / 2⌋-th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

---

**Constraints**:

- The number of nodes in the list is in the range `[1, 10^5]`.
- `1 <= Node.val <= 10^5`

---

## Examples

### Example 1

**Input**: `head = [1,3,4,7,1,2,6]`  
**Output**: `[1,3,4,1,2,6]`  
**Explanation**:

- The linked list has 7 nodes, so the middle node is at index 3 (0-based), which has value 7.
- After removing this node, the list becomes `[1,3,4,1,2,6]`.

### Example 2

**Input**: `head = [1,2,3,4]`  
**Output**: `[1,2,4]`  
**Explanation**:

- The linked list has 4 nodes, so the middle node is at index 2, with value 3.
- Removing this node results in `[1,2,4]`.

### Example 3

**Input**: `head = [2,1]`  
**Output**: `[2]`  
**Explanation**:

- The linked list has 2 nodes, so the middle node is at index 1, with value 1.
- After removal, only the node with value 2 remains.

---

## Approach

1. **Two-pointer (slow and fast) technique**:

    - **Step 1**: Initialize two pointers, `slow` and `fast`, both starting at the head of the linked list.
    - **Step 2**: Initialize a `prev` pointer to `null` to keep track of the node before `slow`.
    - **Step 3**: Move `fast` pointer two steps at a time and `slow` pointer one step at a time.
    - **Step 4**: When `fast` reaches the end of the list, `slow` will be pointing to the middle node.
    - **Step 5**: Update `prev.next` to `slow.next` to remove the middle node from the list.

2. **Edge Cases**:
    - If the linked list has only one node (`head.next` is `null`), return `null` because after deleting the middle node, the list will be empty.
    - Handle large lists efficiently by doing a single pass through the list using two pointers.

---

## Solution Code

```javascript
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
	if (!head.next) return null; // If only one node, return null

	let slow = (fast = head);
	let prev = null;

	while (fast && fast.next) {
		prev = slow;
		slow = slow.next;
		fast = fast.next.next;
	}

	// 'slow' is the middle node; remove it by linking prev to slow.next
	prev.next = slow.next;

	return head;
};

// Example usage:
const head = convertArrayToLinkedList([1, 3, 4, 7, 1, 2, 6]);
deleteMiddle(head);
