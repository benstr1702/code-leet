# Binary Tree Right Side View

### Difficulty: Medium

## Problem Overview

Given the root of a binary tree, return the values of the nodes that are visible when looking at the tree from the right side. This means that for each level of the tree, only the rightmost node's value should be included in the output.

**Constraints**:

-   The number of nodes in the tree is in the range `[0, 100]`.
-   `-100 <= Node.val <= 100`

## Examples

### Example 1

**Input**: `root = [1, 2, 3, null, 5, null, 4]`  
**Output**: `[1, 3, 4]`  
**Explanation**:

-   Level 0: Only node `1` is visible.
-   Level 1: The rightmost node is `3`.
-   Level 2: The rightmost node is `4`.

### Example 2

**Input**: `root = [1, null, 3]`  
**Output**: `[1, 3]`  
**Explanation**:

-   Level 0: Only node `1` is visible.
-   Level 1: The rightmost node is `3`.

### Example 3

**Input**: `root = []`  
**Output**: `[]`  
**Explanation**: The tree is empty, so there is no right-side view.

## Approach

1. **Breadth-First Search (BFS) Approach**:

    - **Step 1**: Use a queue to perform a level-order traversal of the tree.
    - **Step 2**: Iterate through each level of the tree.
    - **Step 3**: For each level, track the rightmost node by processing nodes from left to right.
    - **Step 4**: Add the rightmost node of each level to the result list.
    - **Step 5**: Return the list of right-side view nodes.

2. **Edge Cases**:
    - If the tree is empty (`root` is `null`), return an empty list `[]`.
    - If the tree has only one node, return that node's value.
    - If the tree is skewed (e.g., all left children or all right children), ensure that only the rightmost node per level is returned.

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
 * @return {number[]}
 */
const rightSideView = (root) => {
	if (!root) return [];
	const res = [];
	const q = [root];
	while (q.length > 0) {
		const levelSize = q.length;
		for (let i = 0; i < levelSize; i++) {
			const node = q.shift();
			if (i === levelSize - 1) {
				res.push(node.val);
			}
			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
		}
	}
	return res;
};

const root = convertArrayToTree([1, 2, 3, null, 5, null, 4]);
console.log(rightSideView(root));
```
