/**
 * @param {TreeNode} root
 * @return {number}
 */
class TreeNode {
	constructor(value, left, right) {
		this.value = value === undefined ? null : value;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
const maxDepth = (root) => {
	if (root === null) return 0;
	let leftD = maxDepth(root.left);
	let rightD = maxDepth(root.right);
	// console.log("right Depth:", rightD, "\n", "left Depth:", leftD);
	return Math.max(leftD, rightD) + 1;
};

const root = new TreeNode(1);
root.left = new TreeNode(5);
root.right = new TreeNode(3);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.left.left.right = new TreeNode(5);
root.left.left.left = new TreeNode(9);
console.log(root);

console.log(maxDepth(root));
