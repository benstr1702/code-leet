# [100] Same Tree

### Difficulty: Easy

## Problem Overview

Given the roots of two binary trees `p` and `q`, determine if the two trees are identical. Two binary trees are considered the same if they are structurally identical, and the nodes have the same values.

**Constraints**:

-   The number of nodes in each tree is in the range `[0, 100]`.
-   −10⁴ ≤ Node.val ≤ 10⁴

## Examples

### Example 1

**Input**:

```
p = [1, 2, 3], q = [1, 2, 3]
```

**Output**: `true`
**Explanation**: Both trees have the same structure and node values.

### Example 2

**Input**:

```
p = [1, 2], q = [1, null, 2]
```

**Output**: `false`
**Explanation**: The structures of the two trees are different.

### Example 3

**Input**:

```
p = [1, 2, 1], q = [1, 1, 2]
```

**Output**: `false`
**Explanation**: The values of the nodes in the two trees differ.

## Approach

1. **Recursive Tree Comparison**:

    - **Step 1**: Check if both `p` and `q` are `null`. If so, return `true` as both trees are empty.
    - **Step 2**: If either `p` or `q` is `null`, return `false` because one tree is empty, and the other is not.
    - **Step 3**: Compare the values of the current nodes of `p` and `q`. If the values are not equal, return `false`.
    - **Step 4**: Recursively compare the left subtrees of `p` and `q`, and the right subtrees of `p` and `q`.

2. **Edge Cases**:
    - Both trees are empty.
    - One tree is empty while the other is not.
    - Trees have different structures.
    - Trees have identical structures but different node values.

## Solution Code

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
	if (p === null && q === null) return true;
	if (p === null || q === null) return false;

	if (p.val === q.val) {
		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
	}
	return false;
};

// Example usage:
class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(p, q)); // Output: true
```
