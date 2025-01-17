/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// Preorder array cannot be empty
// Preorder and Inorder arrays have the same length
const buildTree = (preorder, inorder) => {
	if (!preorder.length || !inorder.length) return null;
	const root = new TreeNode(preorder[0]);
	const rootIndex = inorder.indexOf(preorder[0]);
	const leftSubTree = inorder.slice(0, rootIndex);
	const rightSubTree = inorder.slice(rootIndex + 1);

	const leftPreorder = preorder.slice(1, leftSubTree.length + 1);
	const rightPreorder = preorder.slice(leftSubTree.length + 1);

	root.left = buildTree(leftPreorder, leftSubTree);
	root.right = buildTree(rightPreorder, rightSubTree);

	return root;
};
