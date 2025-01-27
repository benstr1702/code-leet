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
const zigzagLevelOrder = (root) => {
	if (!root) return [];
	const response = [];
	const q = [root];
	let leftToRight = true; //true means left to right
	while (q.length) {
		const levelArray = [];
		const levelSize = q.length;
		for (let i = 0; i < levelSize; i++) {
			const node = q.shift();
			if (leftToRight) {
				levelArray.push(node.val);
			} else {
				levelArray.unshift(node.val);
			}

			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
		}
		response.push(levelArray);
		leftToRight = !leftToRight;
	}
	return response;
};

const root = convertArrayToTree([3, 9, 20, null, null, 15, 7]);
console.log(zigzagLevelOrder(root));
