class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
// Helper function to construct a binary tree from an array:
function convertArrayToTree(array) {
	// If no array provided or array is empty:
	if (!array || array.length === 0) return null;
	// Init root as the first element in the array:
	const root = new TreeNode(array[0]);
	// Init a queue:
	const queue = [root];
	let i = 1;

	while (queue.length > 0 && i < array.length) {
		// Remove the first element in the queue and return it:
		const current = queue.shift();
		//If left child node exists:
		if (i < array.length && array[i] !== null) {
			current.left = new TreeNode(array[i]);
			queue.push(current.left);
		}
		i++;
		// If right child node exists:
		if (i < array.length && array[i] !== null) {
			current.right = new TreeNode(array[i]);
			queue.push(current.right);
		}
		i++;
	}
	return root;
}

// const countNodes = (root) => {
// 	if (root == null) return 0;
// 	return countNodes(root.left) + countNodes(root.right) + 1;
// };

const countNodes = (root) => {
	if (!root) return 0;
	const getLeftHeight = (node) => {
		let height = 0;
		while (node) {
			height++;
			node = node.left;
		}
		return height;
	};
	const getRightHeight = (node) => {
		let height = 0;
		while (node) {
			height++;
			node = node.right;
		}
		return height;
	};
	const leftHeight = getLeftHeight(root);
	const rightHeight = getRightHeight(root);

	if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1;
	return 1 + countNodes(root.left) + countNodes(root.right);
};

console.log(countNodes(convertArrayToTree([1, 2, 3, 4, 5, 6, null])));
