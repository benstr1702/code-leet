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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = (root, targetSum) => {
	if (!root) return 0;

	function countPathFromNode(node, targetSum) {
		if (!node) return 0;
		let count = 0;
		if (node.val === targetSum) count++;
		count += countPathFromNode(node.left, targetSum - node.val);
		count += countPathFromNode(node.right, targetSum - node.val);
		return count;
	}

	let fromRoot = countPathFromNode(root, targetSum);
	let fromLeft = pathSum(root.left, targetSum);
	let fromRight = pathSum(root.right, targetSum);

	return fromLeft + fromRight + fromRoot;
};

const tree = convertArrayToTree([
	5,
	4,
	8,
	11,
	null,
	13,
	4,
	7,
	2,
	null,
	null,
	5,
	1,
]);

console.log(pathSum(tree, 22));
