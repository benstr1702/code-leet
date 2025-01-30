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
 * @return {number[]}
 */
const rightSideView = (root) => {
	if (!root) return [];
	const res = [];
	const q = [root];
	while (q.length > 0) {
		const levelSize = q.length;
		for (let i = 0; i < levelSize; i++) {
			const node = q.shift();
			if (i === levelSize - 1) {
				res.push(node.val);
			}
			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
		}
	}
	return res;
};

const root = convertArrayToTree([1, 2, 3, null, 5, null, 4]);
console.log(rightSideView(root));
