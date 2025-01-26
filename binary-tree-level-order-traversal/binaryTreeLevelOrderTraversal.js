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
 * @return {number[][]}
 */
const levelOrder = (root) => {
	if (!root) return [];
	const queue = [root];
	const response = [];

	while (queue.length > 0) {
		const levelSize = queue.length;
		const levelArray = [];
		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift();
			levelArray.push(node.val);
			console.log(`levelArray:${levelArray}`);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		response.push(levelArray);
	}
	return response;
};

const root = convertArrayToTree([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(root));
