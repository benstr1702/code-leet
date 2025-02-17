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
 * @return {boolean}
 */
const isValidBST = (root) => {
	function dfs(node, min, max) {
		if (node === null) return true;
		if (
			(min !== null && node.val <= min) ||
			(max !== null && node.val >= max)
		)
			return false;

		return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
	}
	return dfs(root, null, null);
};

const root = convertArrayToTree([5, 1, 4, null, null, 3, 6]);
console.log(isValidBST(root));
