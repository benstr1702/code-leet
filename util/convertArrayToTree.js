class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function convertArrayToTree(array) {
	if (!array || array.length === 0) return null;

	const root = new TreeNode(array[0]);
	const queue = [root];
	let i = 1;

	while (queue.length > 0 && i < array.length) {
		const current = queue.shift();

		if (i < array.length && array[i] !== null) {
			current.left = new TreeNode(array[i]);
			queue.push(current.left);
		}
		i++;

		if (i < array.length && array[i] !== null) {
			current.right = new TreeNode(array[i]);
			queue.push(current.right);
		}
		i++;
	}

	return root;
}

module.exports = {
	TreeNode,
	convertArrayToTree,
};
