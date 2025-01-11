// Class TreeNode:
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

const invertTree = (root) => {
	if (!root) return null;
	if (root) {
		[root.left, root.right] = [
			invertTree(root.right),
			invertTree(root.left),
		];
	}

	return root;
};

const root = convertArrayToTree([4, 2, 7, 1, 3, 6, 9]);
console.log("Tree: \n", root);
console.log("Inverted Tree: \n", invertTree(root));
