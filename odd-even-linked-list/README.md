# Odd Even Linked List

### Difficulty: Medium

## Problem Overview

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, the second even, and so on.

You must solve the problem in **O(1)** extra space complexity and **O(n)** time complexity.

**Constraints**:

- The number of nodes in the linked list is in the range [0, 10⁴].
- -10⁶ <= Node.val <= 10⁶
- The relative order of nodes in the odd and even group should be preserved.

## Examples

### Example 1

**Input**: `head = [1,2,3,4,5]`  
**Output**: `[1,3,5,2,4]`  
**Explanation**:

- Nodes at positions 1, 3, 5 are grouped first: `[1,3,5]`
- Then nodes at positions 2, 4 follow: `[2,4]`
- Final list: `[1,3,5,2,4]`

### Example 2

**Input**: `head = [2,1,3,5,6,4,7]`  
**Output**: `[2,3,6,7,1,5,4]`  
**Explanation**:

- Odd-positioned nodes: `[2,3,6,7]`
- Even-positioned nodes: `[1,5,4]`
- Combined: `[2,3,6,7,1,5,4]`

## Approach

1. **Two-Pointer Rewiring**:

    - **Step 1**: Handle edge cases: if the list has 0 or 1 nodes, return it as is.
    - **Step 2**: Initialize `odd` pointer to `head` and `even` to `head.next`.
    - **Step 3**: Save the starting point of even list as `evenHead` so we can connect it at the end.
    - **Step 4**: Traverse while `even` and `even.next` exist:
        - Set `odd.next = even.next` and move `odd` forward.
        - Set `even.next = odd.next` and move `even` forward.
    - **Step 5**: Once done, connect the end of odd list (`odd.next`) to the start of even list (`evenHead`).

2. **Edge Cases**:
    - If the list is empty (`head == null`) or has only one node, return the head as is.
    - List with only two nodes doesn't need rearranging, but the logic still works correctly.

## Solution Code

```javascript
const oddEvenList = (head) => {	
    if (!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};
