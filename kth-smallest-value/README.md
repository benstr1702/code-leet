# 230. Kth Smallest Element in a BST

### Difficulty: Medium

## Problem Overview

Given the root of a binary search tree (BST) and an integer `k`, return the k-th smallest value (1-indexed) of all the values of the nodes in the tree.

A BST has the property that for any given node:

-   All values in its **left subtree** are **less than** the node's value.
-   All values in its **right subtree** are **greater than** the node's value.

The k-th smallest value is the value of the node that would appear in the k-th position if all the node values were listed in ascending order.

**Constraints**:

-   The number of nodes in the tree is `n`.
-   `1 <= k <= n <= 10^4`
-   `0 <= Node.val <= 10^4`

## Examples

### Example 1

**Input**: `root = [3,1,4,null,2]`, `k = 1`  
**Output**: `1`  
**Explanation**:

-   The BST looks like this:
    ```
        3
       / \
      1   4
       \
        2
    ```
-   The sorted values of the nodes are `[1, 2, 3, 4]`.
-   The 1st smallest value is `1`.

### Example 2

**Input**: `root = [5,3,6,2,4,null,null,1]`, `k = 3`  
**Output**: `3`  
**Explanation**:

-   The BST looks like this:
    ```
          5
         / \
        3   6
       / \
      2   4
     /
    1
    ```
-   The sorted values of the nodes are `[1, 2, 3, 4, 5, 6]`.
-   The 3rd smallest value is `3`.

## Approach

1. **In-Order Traversal**:

    - Perform an in-order traversal (left, root, right) of the BST. This will visit the nodes in ascending order.
    - Store the values of the nodes in an array as you traverse.
    - Return the value at the `(k - 1)` index of the array (since the problem is 1-indexed).

2. **Edge Cases**:
    - If the tree is empty (i.e., `root` is `null`), return `null` or handle it as per requirements.
    - If `k` is greater than the number of nodes in the tree, return `null` or handle it appropriately.

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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
	const values = [];
	function dfs(node) {
		if (!node) return;
		dfs(node.left);
		values.push(node.val);
		dfs(node.right);
	}
	dfs(root);
	return values[k - 1];
};

const root = convertArrayToTree([3, 1, 4, null, 2]);
console.log(kthSmallest(root, 1)); // Output: 1
```
