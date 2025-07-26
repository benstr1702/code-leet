# 206. Reverse Linked List

### Difficulty: Easy

## Problem Overview

Given the `head` of a singly linked list, reverse the list and return the reversed list.

You need to reverse the direction of the `next` pointers in the list so that the list is traversed in the opposite order. The function should return the new head of the reversed linked list.

**Constraints**:

- The number of nodes in the list is in the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

## Examples

### Example 1

**Input**: `head = [1,2,3,4,5]`  
**Output**: `[5,4,3,2,1]`  
**Explanation**:

- The list is reversed by changing each node’s `next` pointer to point to its previous node. After reversal, `5` becomes the new head, followed by `4`, `3`, `2`, and `1`.

### Example 2

**Input**: `head = [1,2]`  
**Output**: `[2,1]`  
**Explanation**:

- The node `2` points to `1` instead of `null`, and `1` now points to `null`.

### Example 3

**Input**: `head = []`  
**Output**: `[]`  
**Explanation**:

- The list is empty, so the reversed list is also empty.

## Approach

1. **Iterative Reversal Using Three Pointers**:

    - **Step 1**: Initialize `prev` to `null` and `curr` to `head`. These will keep track of the reversed part and the current node.
    - **Step 2**: Loop through the list while `curr` is not `null`.
    - **Step 3**: Inside the loop, store `curr.next` in a temporary variable `next` to keep track of the next node.
    - **Step 4**: Set `curr.next = prev` to reverse the link direction.
    - **Step 5**: Move `prev` to `curr` and `curr` to `next` to advance the pointers. Repeat until the end of the list.

2. **Edge Cases**:
    - If the list is empty (`head === null`), return `null`.
    - If the list has only one node, it remains unchanged after reversal.

## Solution Code

```javascript
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
const reverseList = (head) => {
	let prev = null;
	let next = null;
	let curr = head;
	while (curr) {
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}
	return prev;
};
