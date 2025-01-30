/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { convertArrayToTree, TreeNode } = require("../util/convertArrayToTree");

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getMinimumDifference = (root) => {
	let minDiff = Infinity;
	let prev = null;

	function DFS(node) {
		if (!node) return null;
		DFS(node.left);

		if (prev !== null) {
			minDiff = Math.min(minDiff, Math.abs(prev - node.val));
		}
		prev = node.val;

		DFS(node.right);
	}

	DFS(root);
	return minDiff;
};

const root = convertArrayToTree([0, null, 2236, 1277, 2776, 519]);
console.log(getMinimumDifference(root));
