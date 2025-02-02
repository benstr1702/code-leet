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
console.log(kthSmallest(root, 1));
