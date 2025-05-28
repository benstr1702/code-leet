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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = (root1, root2) => {
	const leaves1 = [];
	const leaves2 = [];
	if (!root1.left && !root1.right && !root2.left && !root2.right)
		return root1.val === root2.val;

	function DFS(node, array) {
		if (!node) return;
		if (!node.left && !node.right) {
			array.push(node.val);
			return;
		}
		if (node.left) DFS(node.left, array);
		if (node.right) DFS(node.right, array);
	}

	answer1 = DFS(root1, leaves1);
	answer2 = DFS(root2, leaves2);

	if (leaves1.length !== leaves2.length) return false;
	for (let i = 0; i < leaves1.length; i++) {
		if (leaves1[i] !== leaves2[i]) return false;
	}

	return true;
};
const tree1 = convertArrayToTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
const tree2 = convertArrayToTree([
	3,
	5,
	1,
	6,
	7,
	4,
	2,
	null,
	null,
	null,
	null,
	null,
	null,
	9,
	8,
]);
console.log(leafSimilar(tree1, tree2));
