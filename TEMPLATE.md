# Problem Title

### Difficulty: [Difficulty Level]

## Problem Overview

You are given the root of a binary tree where each node contains a digit from `0` to `9`. Each root-to-leaf path in the tree represents a number. Your task is to return the total sum of all root-to-leaf numbers.

**Constraints**:

-   The number of nodes in the tree is in the range `[1, 1000]`.
-   `0 <= Node.val <= 9`
-   The depth of the tree will not exceed `10`.

## Examples

### Example 1

**Input**: `root = [example_input_1]`  
**Output**: `example_output_1`  
**Explanation**:

-   Explanation of how the output is derived for this input.

### Example 2

**Input**: `root = [example_input_2]`  
**Output**: `example_output_2`  
**Explanation**:

-   Explanation of how the output is derived for this input.

## Approach

1. **[Approach Name]**:

    - **Step 1**: Description of step 1.
    - **Step 2**: Description of step 2.
    - **Step 3**: Description of step 3.
    - **Step 4**: Description of step 4.
    - **Step 5**: Description of step 5.

2. **Edge Cases**:
    - If the tree is empty (i.e., `root` is `null`), return `0`.
    - Additional edge cases as necessary.

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
var solutionFunction = function (root) {
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
