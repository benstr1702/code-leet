# 105 Construct Binary Tree from Preorder and Inorder Traversal

### Difficulty: Medium

## Problem Overview

Given two integer arrays `preorder` and `inorder` representing the preorder and inorder traversal of a binary tree respectively, construct and return the binary tree. The preorder traversal visits nodes in the order: root, left subtree, right subtree. The inorder traversal visits nodes in the order: left subtree, root, right subtree.

**Constraints**:

-   1 <= preorder.length <= 3000
-   inorder.length == preorder.length
-   -3000 <= preorder[i], inorder[i] <= 3000
-   preorder and inorder consist of unique values
-   Each value of inorder also appears in preorder
-   preorder is guaranteed to be the preorder traversal of the tree
-   inorder is guaranteed to be the inorder traversal of the tree

## Examples

### Example 1

**Input**:

```
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
```

**Output**:

```
    3
   / \
  9  20
    /  \
   15   7
```

**Explanation**: The preorder traversal starts with root (3), followed by left child (9), then the right subtree (20,15,7). The inorder traversal shows that 9 is the left child of 3, and 20 with its children (15,7) form the right subtree.

### Example 2

**Input**:

```
preorder = [1,2]
inorder = [2,1]
```

**Output**:

```
  1
 /
2
```

**Explanation**: Since 2 appears before 1 in inorder traversal, it must be the left child of 1.

## Approach

1. **Recursive Tree Construction**:

    - **Step 1**: Create root node from first element of preorder array
    - **Step 2**: Find position of root value in inorder array to determine left and right subtree elements
    - **Step 3**: Split both arrays into left and right subtree portions
    - **Step 4**: Recursively construct left and right subtrees
    - **Step 5**: Return the constructed root node

2. **Edge Cases**:
    - Empty arrays should return null
    - Single node trees (arrays of length 1)
    - Trees with only left or only right children
    - Need to handle the base case when recursion should stop

## Solution Code

```javascript
function buildTree(preorder, inorder) {
	// If either array is empty, return null
	if (preorder.length === 0 || inorder.length === 0) {
		return null;
	}

	// Create the root node from the first element of preorder
	const root = new TreeNode(preorder[0]);

	// Find the index of root value in inorder array
	const rootIndex = inorder.indexOf(preorder[0]);

	// Left subtree will contain elements before root in inorder
	const leftInorder = inorder.slice(0, rootIndex);
	// Right subtree will contain elements after root in inorder
	const rightInorder = inorder.slice(rootIndex + 1);

	// Elements in preorder for left subtree (same length as leftInorder)
	const leftPreorder = preorder.slice(1, leftInorder.length + 1);
	// Elements in preorder for right subtree (remaining elements)
	const rightPreorder = preorder.slice(leftInorder.length + 1);

	// Recursively build left and right subtrees
	root.left = buildTree(leftPreorder, leftInorder);
	root.right = buildTree(rightPreorder, rightInorder);

	return root;
}

// Optimized solution using Map for O(n) time complexity
function buildTreeOptimized(preorder, inorder) {
	const inorderMap = new Map();

	for (let i = 0; i < inorder.length; i++) {
		inorderMap.set(inorder[i], i);
	}

	function buildTreeHelper(preStart, preEnd, inStart, inEnd) {
		if (preStart > preEnd) {
			return null;
		}

		const root = new TreeNode(preorder[preStart]);
		const rootIndex = inorderMap.get(preorder[preStart]);
		const leftSubtreeSize = rootIndex - inStart;

		root.left = buildTreeHelper(
			preStart + 1,
			preStart + leftSubtreeSize,
			inStart,
			rootIndex - 1
		);

		root.right = buildTreeHelper(
			preStart + leftSubtreeSize + 1,
			preEnd,
			rootIndex + 1,
			inEnd
		);

		return root;
	}

	return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
}
```
