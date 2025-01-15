/**
 * class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const compareNodes = (leftRoot, rightRoot) => {
	if (leftRoot === null && rightRoot === null) return true;
	else if (leftRoot === null || rightRoot === null) return false;
	else if (leftRoot.val !== rightRoot.val) return false;
	if (leftRoot && rightRoot) {
		return (
			compareNodes(leftRoot.left, rightRoot.right) &&
			compareNodes(leftRoot.right, rightRoot.left)
		);
	}
	return true;
};
const isSymmetric = (root) => {
	if (!root) return true;
	return compareNodes(root.left, root.right);
};
