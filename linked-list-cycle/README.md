# 141. Linked List Cycle

### Difficulty: Easy

## Problem Overview

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

**Constraints**:

-   The number of the nodes in the list is in the range [0, 104].
-   -105 <= Node.val <= 105
-   pos is -1 or a valid index in the linked-list.

## Examples

### Example 1

**Input**: `head = [3,2,0,-4], pos = 1`  
**Output**: `true`  
**Explanation**: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

### Example 2

**Input**: `head = [1,2], pos = 0`  
**Output**: `true`  
**Explanation**: There is a cycle in the linked list, where the tail connects to the 0th node.

## Approach

1. **Fast and Slow pointers**:

    - **Step 1**: initialize 2 pointers , slow and fast , assign them both to `head`.
    - **Step 2**: while the fast pointer is not null, and the fast pointer has a next node , do whats in the loop.
    - **Step 3**: fast pointer jumps 2 nodes at a time while the slow pointer only goes up by 1 node each time.
    - **Step 4**: if at any point the slow and fast pointer are equal , that means there has to be a cycle because if there wasnt they would never be equal.

2. **Edge Cases**:
    - if there is no head, or if its a 1-node list , meaning theres no next node for the head , return false.

## Solution Code

```javascript
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
```
