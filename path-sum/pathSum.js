/**

 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 *
*/
class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
const pathSum = (root, targetSum) => {
	// console.log(targetSum - root.val);

	if (!root) return false; // No path
	// If leaf node, check final sum.
	if (!root.left && !root.right) {
		return targetSum === root.val;
	}
	return (
		pathSum(root.left, targetSum - root.val) ||
		pathSum(root.right, targetSum - root.val)
	);
};

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

const root = convertArrayToTree([
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
	null,
	1,
]);

console.log(pathSum(root, 22));
