# 129. Sum Root to Leaf Numbers

### Difficulty: Medium

## Problem Overview

You are given the root of a binary tree where each node contains a digit from `0` to `9`. Each root-to-leaf path in the tree represents a number. For example, the path `1 -> 2 -> 3` represents the number `123`. Your task is to return the total sum of all root-to-leaf numbers. The answer is guaranteed to fit in a 32-bit integer.

**Constraints**:

-   The number of nodes in the tree is in the range `[1, 1000]`.
-   `0 <= Node.val <= 9`
-   The depth of the tree will not exceed `10`.

## Examples

### Example 1

**Input**: `root = [1,2,3]`  
**Output**: `25`  
**Explanation**:

-   The root-to-leaf path `1 -> 2` represents the number `12`.
-   The root-to-leaf path `1 -> 3` represents the number `13`.
-   Therefore, the total sum is `12 + 13 = 25`.

### Example 2

**Input**: `root = [4,9,0,5,1]`  
**Output**: `1026`  
**Explanation**:

-   The root-to-leaf path `4 -> 9 -> 5` represents the number `495`.
-   The root-to-leaf path `4 -> 9 -> 1` represents the number `491`.
-   The root-to-leaf path `4 -> 0` represents the number `40`.
-   Therefore, the total sum is `495 + 491 + 40 = 1026`.

## Approach

1. **Depth-First Search (DFS)**:

    - **Step 1**: Traverse the binary tree using DFS. Start from the root node and keep track of the current number formed by the path from the root to the current node.
    - **Step 2**: At each node, update the current number by appending the node's value to the existing number (`currentPath = currentPath * 10 + node.val`).
    - **Step 3**: If the current node is a leaf node (i.e., it has no left or right children), add the current number to the total sum.
    - **Step 4**: Recursively process the left and right subtrees, passing the updated current number and total sum to the recursive calls.
    - **Step 5**: Return the total sum after traversing the entire tree.

2. **Edge Cases**:
    - If the tree is empty (i.e., `root` is `null`), return `0`.
    - If the tree has only one node, the total sum is the value of that node.

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
var sumNumbers = function (root) {
	const dfs = (node, currentPath, totalSum) => {
		if (!node) return totalSum;

		currentPath = currentPath * 10 + node.val;

		if (!node.left && !node.right) {
			totalSum += currentPath;
			return totalSum;
		}

		totalSum = dfs(node.left, currentPath, totalSum);
		totalSum = dfs(node.right, currentPath, totalSum);

		return totalSum;
	};

	return dfs(root, 0, 0);
};
```
