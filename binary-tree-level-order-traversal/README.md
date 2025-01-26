# 102. Binary Tree Level Order Traversal

### Difficulty: Medium

## Problem Overview

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

**Constraints**:

-   The number of nodes in the tree is in the range `[0, 2000]`.
-   `-1000 <= Node.val <= 1000`

## Examples

### Example 1

**Input**: `root = [3,9,20,null,null,15,7]`  
**Output**: `[[3],[9,20],[15,7]]`  
**Explanation**:

-   Level 0: `[3]`
-   Level 1: `[9, 20]`
-   Level 2: `[15, 7]`

### Example 2

**Input**: `root = [1]`  
**Output**: `[[1]]`  
**Explanation**:

-   Level 0: `[1]`

### Example 3

**Input**: `root = []`  
**Output**: `[]`  
**Explanation**:

-   The tree is empty, so the output is an empty array.

## Approach

1. **Breadth-First Search (BFS)**:

    - **Step 1**: Use a queue to keep track of nodes at the current level.
    - **Step 2**: Start by adding the root node to the queue.
    - **Step 3**: For each level, determine the number of nodes in the queue (`levelSize`).
    - **Step 4**: Process each node in the queue, add its value to the current level's array, and add its children (left and right) to the queue for the next level.
    - **Step 5**: After processing all nodes at the current level, add the current level's array to the result.
    - **Step 6**: Repeat until the queue is empty.

2. **Edge Cases**:
    - If the tree is empty (i.e., `root` is `null`), return an empty array.
    - If the tree has only one node, return an array containing a single array with that node's value.

## Solution Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
	if (!root) return []; // Return an empty array for an empty tree
	const queue = [root];
	const response = [];

	while (queue.length > 0) {
		const levelSize = queue.length;
		const levelArray = []; // Create a new array for the current level

		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift();
			levelArray.push(node.val); // Add the node's value to the current level's array

			// Add the children of the current node to the queue
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		response.push(levelArray); // Add the current level's array to the response
	}

	return response;
};
```
