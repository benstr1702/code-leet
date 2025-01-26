# 236. Lowest Common Ancestor of a Binary Tree

### Difficulty: Medium

## Problem Overview

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes `p` and `q`.

The lowest common ancestor is defined as the lowest node in the tree that has both `p` and `q` as descendants (where we allow a node to be a descendant of itself).

**Constraints**:

-   The number of nodes in the tree is in the range `[2, 10^5]`.
-   `-10^9 <= Node.val <= 10^9`
-   All `Node.val` values are unique.
-   `p` and `q` are guaranteed to exist in the tree.

## Examples

### Example 1

**Input**: `root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1`  
**Output**: `3`  
**Explanation**:  
The LCA of nodes `5` and `1` is `3`.

### Example 2

**Input**: `root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4`  
**Output**: `5`  
**Explanation**:  
The LCA of nodes `5` and `4` is `5`, since a node can be a descendant of itself according to the LCA definition.

### Example 3

**Input**: `root = [1,2], p = 1, q = 2`  
**Output**: `1`  
**Explanation**:  
The LCA of nodes `1` and `2` is `1`.

## Approach

1. **Recursive Depth-First Search (DFS)**:

    - **Step 1**: Use DFS to traverse the tree.
    - **Step 2**: At each node, check the following conditions:
        - If the current node is `null`, return `null`.
        - If the current node matches either `p` or `q`, return the current node.
    - **Step 3**: Recursively search for `p` and `q` in the left and right subtrees.
    - **Step 4**: If both left and right recursive calls return non-null values, the current node is the LCA.
    - **Step 5**: Otherwise, return the non-null value from the left or right subtree.

2. **Edge Cases**:
    - If either `p` or `q` is the root, the root is the LCA.
    - If `p` and `q` are on the same side of the tree, traverse only that subtree.

## Solution Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
	if (!root || root === q || root === p) {
		return root;
	}
	const leftSubTree = lowestCommonAncestor(root.left, p, q);
	const rightSubTree = lowestCommonAncestor(root.right, p, q);

	if (leftSubTree && rightSubTree) {
		return root; // Found LCA where p and q split.
	}
	return leftSubTree || rightSubTree; // Return the subtree that contains p or q.
};
```
