# Binary Tree Zigzag Level Order Traversal

### Difficulty: Medium

## Problem Overview

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

**Constraints**:

-   The number of nodes in the tree is in the range `[1, 2000]`.
-   `-100 <= Node.val <= 100`

## Examples

### Example 1

**Input**: `root = [3, 9, 20, null, null, 15, 7]`  
**Output**: `[[3], [20, 9], [15, 7]]`  
**Explanation**:

-   The first level is traversed from left to right: `[3]`.
-   The second level is traversed from right to left: `[20, 9]`.
-   The third level is traversed from left to right: `[15, 7]`.

### Example 2

**Input**: `root = []`  
**Output**: `[]`  
**Explanation**: The tree is empty.

## Approach

1. **Breadth-First Search (BFS)**:

    - **Step 1**: Initialize a queue with the root node and a flag to determine traversal direction (`leftToRight`).
    - **Step 2**: While the queue is not empty, process each level of the tree.
    - **Step 3**: For each node in the current level, append its value to a temporary list (`levelArray`) based on the traversal direction.
    - **Step 4**: Add the children of the current node to the queue for the next level.
    - **Step 5**: After processing a level, flip the traversal direction and add the `levelArray` to the result.

2. **Edge Cases**:
    - If the tree is empty (i.e., `root` is `null`), return an empty list.
    - If the tree has only one node, the result is a list containing a single list with that node's value.

## Solution Code

```javascript
const { convertArrayToTree, TreeNode } = require("../util/convertArrayToTree");

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
const zigzagLevelOrder = (root) => {
	if (!root) return [];
	const response = [];
	const q = [root];
	let leftToRight = true; // true means left to right
	while (q.length) {
		const levelArray = [];
		const levelSize = q.length;
		for (let i = 0; i < levelSize; i++) {
			const node = q.shift();
			if (leftToRight) {
				levelArray.push(node.val);
			} else {
				levelArray.unshift(node.val);
			}

			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
		}
		response.push(levelArray);
		leftToRight = !leftToRight;
	}
	return response;
};

const root = convertArrayToTree([3, 9, 20, null, null, 15, 7]);
console.log(zigzagLevelOrder(root));
```
