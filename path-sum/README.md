# 112. Path Sum

### Difficulty: Easy

## Problem Overview

Given the root of a binary tree and an integer `targetSum`, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.

A **leaf** is a node with no children.

**Constraints**:

-   The number of nodes in the tree is in the range `[0, 5000]`.
-   −10⁹ ≤ Node.val ≤ 10⁹
-   −10⁹ ≤ targetSum ≤ 10⁹

## Examples

### Example 1

**Input**:

```
root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum = 22
```

**Output**: `true`
**Explanation**: The root-to-leaf path `5 → 4 → 11 → 2` adds up to `22`.

### Example 2

**Input**:

```
root = [1, 2, 3], targetSum = 5
```

**Output**: `false`
**Explanation**: There is no root-to-leaf path with a sum of `5`.

### Example 3

**Input**:

```
root = [], targetSum = 0
```

**Output**: `false`
**Explanation**: The tree is empty, so no path exists.

## Approach

1. **Recursive Depth-First Search (DFS)**:

    - **Step 1**: Start from the root and check if it is null. If it is, return `false` as no path exists.
    - **Step 2**: For each node, subtract its value from `targetSum` to get the new `targetSum` for the subtree.
    - **Step 3**: If the current node is a leaf (i.e., both left and right children are null), check if the remaining `targetSum` equals the node's value. If so, return `true`.
    - **Step 4**: Recursively check the left and right subtrees with the updated `targetSum`. Return `true` if either subtree has a valid path.

2. **Edge Cases**:
    - The tree is empty (`root` is `null`).
    - The target sum is very large or very small.
    - There are negative values in the tree.

## Solution Code

```javascript
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

const hasPathSum = (root, targetSum) => {
	if (!root) return false; // No path

	// If leaf node, check final sum.
	if (!root.left && !root.right) {
		return targetSum === root.val;
	}

	return (
		hasPathSum(root.left, targetSum - root.val) ||
		hasPathSum(root.right, targetSum - root.val)
	);
};

// Helper function to construct a binary tree from an array:
function convertArrayToTree(array) {
	if (!array || array.length === 0) return null;
	const root = new TreeNode(array[0]);
	const queue = [root];
	let i = 1;

	while (queue.length > 0 && i < array.length) {
		const current = queue.shift();

		if (i < array.length && array[i] !== null) {
			current.left = new TreeNode(array[i]);
			queue.push(current.left);
		}
		i++;

		if (i < array.length && array[i] !== null) {
			current.right = new TreeNode(array[i]);
			queue.push(current.right);
		}
		i++;
	}

	return root;
}

// Example usage
const root = convertArrayToTree([
	5,
	4,
	8,
	11,
	null,
	13,
	4,
	7,
	2,
	null,
	null,
	null,
	1,
]);

console.log(hasPathSum(root, 22)); // Output: true
```
