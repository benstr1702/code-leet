# Search in a Binary Search Tree

### Difficulty: Easy

## Problem Overview

You are given the root of a Binary Search Tree (BST) and an integer `val`.

Your task is to search for a node in the BST such that the node's value equals `val`, and return the **subtree rooted at that node**. If no such node exists, return `null`.

A Binary Search Tree follows the rule:
- The left subtree of a node contains only nodes with values less than the node's value.
- The right subtree of a node contains only nodes with values greater than the node's value.

**Constraints**:

- The number of nodes in the tree is in the range `[1, 5000]`
- `1 <= Node.val <= 10^7`
- `root` is a valid Binary Search Tree
- `1 <= val <= 10^7`

## Examples

### Example 1

**Input**:  
`root = [4,2,7,1,3]`, `val = 2`  
**Output**: `[2,1,3]`  
**Explanation**:

- The value `2` is found in the BST.
- Its subtree includes `1` (left) and `3` (right), forming the subtree `[2,1,3]`.

### Example 2

**Input**:  
`root = [4,2,7,1,3]`, `val = 5`  
**Output**: `null`  
**Explanation**:

- The value `5` is not found in the BST, so the result is `null`.

## Approach

1. **Depth-First Search (DFS)**:

    - **Step 1**: Start from the root node.
    - **Step 2**: If the current node is `null`, return `null`.
    - **Step 3**: If the current node’s value equals `val`, return the node (we've found it).
    - **Step 4**: If the current node’s value is greater than `val`, search the left subtree.
    - **Step 5**: If it is less, search the right subtree.

2. **Edge Cases**:
    - Tree is empty → return `null`.
    - `val` does not exist in the tree → return `null`.

## Solution Code

```javascript
const { convertArrayToTree } = require("../util/convertArrayToTree");
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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
	function DFS(node, val) {
		if (!node || node.val === val) return node;
		if (node.val > val) {
			return DFS(node.left, val);
		}
		if (node.val < val) {
			return DFS(node.right, val);
		}
	}

	return DFS(root, val);
};

const tree = convertArrayToTree([4, 2, 7, 1, 3, null, null]);
console.log(searchBST(tree, 4));
