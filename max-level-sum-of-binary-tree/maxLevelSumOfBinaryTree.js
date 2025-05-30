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
const maxLevelSum = (root) => {
	if (!root.left && !root.right) return 1;

	const q = [root];
	const res = [];
	while (q.length) {
		const levelSize = q.length;
		let levelSum = 0;
		for (let i = 0; i < levelSize; i++) {
			const node = q.shift();
			levelSum += node.val;
			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
		}

		res.push(levelSum);
	}

	let max = -Infinity;
	let level = 0;

	for (let i = 0; i < res.length; i++) {
		if (res[i] > max) {
			max = res[i];
			level = i;
		}
	}
	return level + 1;
};
