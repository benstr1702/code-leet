const { convertArrayToTree } = require("../util/convertArrayToTree	");
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
 * @param {number} key
 * @return {TreeNode}
 */
function deleteNode(root, key) {
	if (!root || !key) return null;
	// Search for a node in a bst
	function DFS(node, key) {
		if (node.val === key) return "found it ";
		else if (node.val > key) {
			// if node value is bigger than the key we disregard the right subtree
			return DFS(node.left);
		} else return DFS(node.right);
	}
	return DFS(root, key);
}

const tree = convertArrayToTree([5, 3, 6, 2, 4, null, 7]);
deleteNode(tree, 3);
