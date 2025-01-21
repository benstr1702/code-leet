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
 * @return {number}
 */
var sumNumbers = function (root) {
	const dfs = (node, currentPath, totalSum) => {
		if (!node) return totalSum;

		currentPath = currentPath * 10 + node.val;

		if (!node.left && !node.right) {
			totalSum += currentPath;
			return totalSum;
		}

		totalSum = dfs(node.left, currentPath, totalSum);
		totalSum = dfs(node.right, currentPath, totalSum);

		return totalSum;
	};

	return dfs(root, 0, 0);
};
