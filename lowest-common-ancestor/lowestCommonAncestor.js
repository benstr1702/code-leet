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

	if (leftSubTree && rightSubTree) return root;

	return leftSubTree || rightSubTree;
};
