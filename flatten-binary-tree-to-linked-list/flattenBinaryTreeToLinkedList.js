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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
	let prev = null;
	const dfs = (node) => {
		if (!node) return;

		const leftSubTree = node.left;
		const rightSubTree = node.right;

		if (prev) {
			prev.left = null;
			prev.right = node;
		}

		prev = node;
		dfs(leftSubTree);
		dfs(rightSubTree);
	};

	dfs(root);
};
