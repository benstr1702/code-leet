# Count Good Nodes in Binary Tree

### Difficulty: Medium

## Problem Overview

Given a binary tree `root`, a node **X** in the tree is named *good* if in the path from the root to **X**, there are no nodes with a value greater than **X**.

Return the number of good nodes in the binary tree.

### Constraints

- The number of nodes in the binary tree is in the range [1, 10⁵].
- Each node's value is between [-10⁴, 10⁴].

## Examples

### Example 1

**Input**: `root = [3,1,4,3,null,1,5]`  
**Output**: `4`  
**Explanation**:
- The good nodes are: 3 (root), 4, 5, and 3 (left child of 1).
- Each of these nodes has no ancestors with a value greater than their own.

### Example 2

**Input**: `root = [3,3,null,4,2]`  
**Output**: `3`  
**Explanation**:
- The good nodes are: 3 (root), 3 (left child), and 4.
- Node 2 is not good because 3 > 2 appears on its path.

### Example 3

**Input**: `root = [1]`  
**Output**: `1`  
**Explanation**:
- The root is always a good node.

## Approach

### 1. Depth-First Search (DFS)

- **Step 1**: Define a recursive DFS function that takes the current node and the max value seen so far on the path.
- **Step 2**: If the current node’s value is greater than or equal to the max value, count it as a good node.
- **Step 3**: Update the max value with the greater between the current node’s value and the current max.
- **Step 4**: Recursively call the DFS function for the left and right children.
- **Step 5**: Return the total count of good nodes after traversal.

### 2. Edge Cases

- If the tree has only one node, it is by default a good node.
- All nodes have the same value: all nodes are good.
- A completely skewed tree (all left or right): DFS still works as it traces the entire path.

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

const { convertArrayToTree } = require("../util/convertArrayToTree");

/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = (root) => {
    if (!root.left && !root.right) return 1;
    let max = root.val;
    let counter = 0;

    function DFS(node, currMax) {
        if (!node) return;
        if (node.val >= currMax) {
            counter++;
        }
        const newMax = Math.max(currMax, node.val);
        if (node.left) DFS(node.left, newMax);
        if (node.right) DFS(node.right, newMax);
    }

    DFS(root, max);
    return counter;
};

// Example usage:
const tree = convertArrayToTree([2, null, 4, 10, 8, null, null, 4]);
console.log(goodNodes(tree));
