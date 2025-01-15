# [222] Count Complete Tree Nodes

### Difficulty: Medium

## Problem Overview

Given the root of a complete binary tree, return the number of nodes in the tree.

A binary tree is complete if every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and \(2^h - 1\) nodes inclusive at the last level \(h\).

**Constraints**:

-   The number of nodes in the tree is in the range \([0, 5 \times 10^4]\).
-   \(0 \leq Node.val \leq 10^4\).
-   The tree is complete.

## Examples

### Example 1

**Input**: `[1, 2, 3, 4, 5, 6, null]`  
**Output**: `6`  
**Explanation**:  
The complete binary tree is as follows:

```
        1
       / \
      2   3
     / \  /
    4   5 6
```

There are 6 nodes in total.

### Example 2

**Input**: `[]`  
**Output**: `0`  
**Explanation**:  
The tree is empty, so there are no nodes.

### Example 3

**Input**: `[1]`  
**Output**: `1`  
**Explanation**:  
The tree has only one node: the root node.

## Approach

1. **Optimal Counting using Tree Height**:

    - **Step 1**: Compute the height of the leftmost path and rightmost path of the tree.
    - **Step 2**: If the heights are equal, the tree is a full binary tree, and the number of nodes can be calculated using the formula \(2^h - 1\).
    - **Step 3**: If the heights are not equal, recursively count nodes in the left and right subtrees and sum them with the root node.

2. **Edge Cases**:
    - The tree is empty (root is `null`).
    - The tree contains only one node.

## Solution Code

```javascript
class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

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

const countNodes = (root) => {
	if (!root) return 0;

	const getLeftHeight = (node) => {
		let height = 0;
		while (node) {
			height++;
			node = node.left;
		}
		return height;
	};

	const getRightHeight = (node) => {
		let height = 0;
		while (node) {
			height++;
			node = node.right;
		}
		return height;
	};

	const leftHeight = getLeftHeight(root);
	const rightHeight = getRightHeight(root);

	if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1;

	return 1 + countNodes(root.left) + countNodes(root.right);
};

console.log(countNodes(convertArrayToTree([1, 2, 3, 4, 5, 6, null]))); // Output: 6
```
