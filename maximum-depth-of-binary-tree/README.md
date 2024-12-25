# 104 Maximum Depth of Binary Tree

### Difficulty: Easy

## Problem Overview

Given the root of a binary tree, return its maximum depth. The maximum depth of a binary tree is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Constraints**:

-   The number of nodes in the tree is in the range \([0, 10^4]\).
-   \(-100 \leq Node.val \leq 100\).

## Examples

### Example 1

**Input**:

```plaintext
    3
   / \
  9  20
     /  \
    15   7
```

**Output**: `3`  
**Explanation**: The longest path is from the root (3) to the leaf (15 or 7), passing through nodes 20 and the respective leaf.

### Example 2

**Input**:

```plaintext
    1
     \
      2
```

**Output**: `2`  
**Explanation**: The longest path is from the root (1) to the leaf (2).

## Approach

1. **Recursive Depth-First Search (DFS)**:

    - **Step 1**: If the current node is `null`, return `0` (base case).
    - **Step 2**: Recursively calculate the depth of the left subtree.
    - **Step 3**: Recursively calculate the depth of the right subtree.
    - **Step 4**: Return the maximum of the left and right subtree depths plus one (for the current node).

2. **Edge Cases**:
    - An empty tree (root is `null`) should return `0`.
    - A tree with a single node should return `1`.

## Solution Code

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
class TreeNode {
	constructor(value, left, right) {
		this.value = value === undefined ? null : value;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
const maxDepth = (root) => {
	if (root === null) return 0;
	let leftD = maxDepth(root.left);
	let rightD = maxDepth(root.right);
	return Math.max(leftD, rightD) + 1;
};

const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(9);

console.log(root);
console.log(maxDepth(root));
```
