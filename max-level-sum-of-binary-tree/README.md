# Maximum Level Sum of a Binary Tree

### Difficulty: Medium

## Problem Overview

Given the `root` of a binary tree, each level is assigned a number starting from 1 (the root). Your task is to determine which level has the **maximum sum** of all its node values and return the **smallest level number** if there are ties.

This involves traversing the tree level by level, calculating the sum of values at each level, and identifying the one with the highest total.

**Constraints**:

- The number of nodes in the tree is in the range \[1, 10⁴\].
- -10⁵ ≤ Node.val ≤ 10⁵

## Examples

### Example 1

**Input**: `root = [1,7,0,7,-8,null,null]`  
**Output**: `2`  
**Explanation**:

- Level 1 sum = 1  
- Level 2 sum = 7 + 0 = 7  
- Level 3 sum = 7 + (-8) = -1  

The maximum sum is at level 2, so return `2`.

### Example 2

**Input**: `root = [989,null,10250,98693,-89388,null,null,null,-32127]`  
**Output**: `2`  
**Explanation**:

- Level 1 sum = 989  
- Level 2 sum = 10250  
- Level 3 sum = 98693 + (-89388) = 9305  
- Level 4 sum = -32127  

The maximum sum is at level 2, so return `2`.

## Approach

1. **Breadth-First Search (BFS) with Level Sum Tracking**:

    - **Step 1**: Initialize a queue with the root node to perform a BFS.
    - **Step 2**: For each level, compute the total sum of all node values.
    - **Step 3**: Store each level's sum in an array.
    - **Step 4**: After the traversal, iterate through the sums to find the maximum and its corresponding level.
    - **Step 5**: Return the level number (1-indexed) with the maximum sum.

2. **Edge Cases**:
    - If the tree has only one node (i.e., no left or right children), return level `1`.
    - Handles negative values gracefully—still returns the level with the least negative sum.

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
const maxLevelSum = (root) => {
    if (!root.left && !root.right) return 1;

    const q = [root];
    const res = [];

    while (q.length) {
        const levelSize = q.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = q.shift();
            levelSum += node.val;
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        res.push(levelSum);
    }

    let max = -Infinity;
    let level = 0;

    for (let i = 0; i < res.length; i++) {
        if (res[i] > max) {
            max = res[i];
            level = i;
        }
    }

    return level + 1;
};
