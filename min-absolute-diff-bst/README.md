# Minimum Absolute Difference in BST

### Difficulty: Easy

## Problem Overview

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

**Constraints**:

-   The number of nodes in the tree is in the range `[2, 10^4]`.
-   `0 <= Node.val <= 10^5`
-   The tree is guaranteed to be a valid BST.

## Examples

### Example 1

**Input**: `root = [4, 2, 6, 1, 3]`  
**Output**: `1`  
**Explanation**:

-   The minimum absolute difference is `1`, which occurs between nodes `1` and `2` or between nodes `3` and `4`.

### Example 2

**Input**: `root = [1, 0, 48, null, null, 12, 49]`  
**Output**: `1`  
**Explanation**:

-   The minimum absolute difference is `1`, which occurs between nodes `48` and `49`.

## Approach

1. **In-order Traversal**:

    - **Step 1**: Perform an in-order traversal of the BST to process nodes in ascending order.
    - **Step 2**: Keep track of the previously visited node's value (`prev`).
    - **Step 3**: For each node, calculate the absolute difference between its value and `prev`.
    - **Step 4**: Update the minimum absolute difference (`minDiff`) if the current difference is smaller.
    - **Step 5**: Update `prev` to the current node's value and continue the traversal.

2. **Edge Cases**:
    - If the tree is empty (i.e., `root` is `null`), return `0`.
    - If the tree has only one node, return `0` (though the constraints ensure at least two nodes).

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
 * @return {number}
 */
var getMinimumDifference = function (root) {
	let minDiff = Infinity;
	let prev = null;

	const dfs = (node) => {
		if (!node) return;

		// Traverse the left subtree
		dfs(node.left);

		// Calculate the difference with the previous node (if prev exists)
		if (prev !== null) {
			minDiff = Math.min(minDiff, Math.abs(node.val - prev));
		}
		// Update prev to the current node's value
		prev = node.val;

		// Traverse the right subtree
		dfs(node.right);
	};

	dfs(root);
	return minDiff;
};
```
