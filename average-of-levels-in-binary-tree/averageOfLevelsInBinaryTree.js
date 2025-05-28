const { convertArrayToTree } = require("../util/convertArrayToTree");
/**
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = (root) => {
	if (!root) return null;
	const queue = [root];
	const response = [];
	while (queue.length > 0) {
		let levelSize = queue.length;
		let levelSum = 0;
		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift();
			levelSum += node.val;
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		response.push(levelSum / levelSize);
	}
	return response;
};

const root = convertArrayToTree([3, 9, 20, null, null, 15, 7]);
console.log(averageOfLevels(root));
