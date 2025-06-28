const { convertArrayToTree } = require("../util/convertArrayToTree");
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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
	function DFS(node, val) {
		if (!node || node.val === val) return node;
		if (node.val > val) {
			return DFS(node.left, val);
		}
		if (node.val < val) {
			return DFS(node.right, val);
		}
	}

	return DFS(root, val);
};

const tree = convertArrayToTree([4, 2, 7, 1, 3, null, null]);
console.log(searchBST(tree, 4));
