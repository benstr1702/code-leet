# 226. Invert Binary Tree

### Difficulty: Medium

## Problem Overview

Given the root of a binary tree, invert the tree, and return its root. Inverting a binary tree means swapping the left and right children of all nodes in the tree.

**Constraints**:

-   The number of nodes in the tree is in the range [0, 100].
-   `-100 <= Node.val <= 100`

## Examples

### Example 1

**Input**: `[4, 2, 7, 1, 3, 6, 9]`  
**Output**: `[4, 7, 2, 9, 6, 3, 1]`  
**Explanation**: The binary tree is inverted by swapping the left and right children of all nodes.

### Example 2

**Input**: `[2, 1, 3]`  
**Output**: `[2, 3, 1]`  
**Explanation**: Inverting the binary tree swaps the left and right children.

## Approach

1. **Recursive Approach**:

    - **Step 1**: Base case: if the node is `null`, return `null`.
    - **Step 2**: Recursively invert the left and right subtrees.
    - **Step 3**: Swap the left and right children of the current node.
    - **Step 4**: Return the root node.

2. **Edge Cases**:
    - The tree is empty (`root` is `null`).
    - The tree has only one node.

## Solution Code

```javascript
// Class TreeNode:
class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// Helper function to construct a binary tree from an array:
function convertArrayToTree(array) {
	// If no array provided or array is empty:
	if (!array || array.length === 0) return null;
	// Init root as the first element in the array:
	const root = new TreeNode(array[0]);
	// Init a queue:
	const queue = [root];
	let i = 1;

	while (queue.length > 0 && i < array.length) {
		// Remove the first element in the queue and return it:
		const current = queue.shift();
		// If left child node exists:
		if (i < array.length && array[i] !== null) {
			current.left = new TreeNode(array[i]);
			queue.push(current.left);
		}
		i++;
		// If right child node exists:
		if (i < array.length && array[i] !== null) {
			current.right = new TreeNode(array[i]);
			queue.push(current.right);
		}
		i++;
	}
	return root;
}

const invertTree = (root) => {
	if (!root) return null;
	if (root) {
		[root.left, root.right] = [
			invertTree(root.right),
			invertTree(root.left),
		];
	}

	return root;
};

const root = convertArrayToTree([4, 2, 7, 1, 3, 6, 9]);
console.log("Tree: \n", root);
console.log("Inverted Tree: \n", invertTree(root));
```
