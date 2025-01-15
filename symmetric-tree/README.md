# [101] Symmetric Tree

### Difficulty: Easy

## Problem Overview

Given the root of a binary tree, determine whether it is a mirror of itself (i.e., symmetric around its center).

**Constraints**:

-   The number of nodes in the tree is in the range `[0, 1000]`.
-   −100 ≤ Node.val ≤ 100

## Examples

### Example 1

**Input**:

```
root = [1, 2, 2, 3, 4, 4, 3]
```

**Output**: `true`
**Explanation**: The tree is symmetric as the left and right subtrees are mirror images of each other.

### Example 2

**Input**:

```
root = [1, 2, 2, null, 3, null, 3]
```

**Output**: `false`
**Explanation**: The tree is not symmetric as the left and right subtrees are not mirror images.

### Example 3

**Input**:

```
root = []
```

**Output**: `true`
**Explanation**: An empty tree is symmetric by definition.

## Approach

1. **Recursive Comparison**:

    - **Step 1**: Start with the root node and check if it is null. If the root is null, the tree is symmetric.
    - **Step 2**: Use a helper function `compareNodes` to recursively compare the left and right subtrees.
    - **Step 3**: For two nodes to be symmetric:
        - Both nodes must be null (base case).
        - Both nodes must have the same value.
        - The left subtree of one node must be a mirror of the right subtree of the other.
    - **Step 4**: Return the result of the recursive comparisons.

2. **Edge Cases**:
    - The tree is empty.
    - One subtree is null while the other is not.
    - Subtrees have different structures or values.

## Solution Code

```javascript
/**
 * class TreeNode {
 *     constructor(val, left, right) {
 *         this.val = val === undefined ? 0 : val;
 *         this.left = left === undefined ? null : left;
 *         this.right = right === undefined ? null : right;
 *     }
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const compareNodes = (leftRoot, rightRoot) => {
	if (leftRoot === null && rightRoot === null) return true;
	else if (leftRoot === null || rightRoot === null) return false;
	else if (leftRoot.val !== rightRoot.val) return false;

	return (
		compareNodes(leftRoot.left, rightRoot.right) &&
		compareNodes(leftRoot.right, rightRoot.left)
	);
};

const isSymmetric = (root) => {
	if (!root) return true;
	return compareNodes(root.left, root.right);
};

// Example usage:
const root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3), new TreeNode(4)),
	new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

console.log(isSymmetric(root)); // Output: true
```
