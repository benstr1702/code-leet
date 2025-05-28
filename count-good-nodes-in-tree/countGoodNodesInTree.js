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

const tree = convertArrayToTree([2, null, 4, 10, 8, null, null, 4]);
console.log(goodNodes(tree));
