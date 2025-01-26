const {
	convertArrayToTree,
	TreeNode,
} = require("./count-complete-tree-nodes/countCompleteTreeNodes");
function BreadthFirstSearch(root) {
	if (!root) return []; // return an empty array if the tree is empty

	const queue = [root]; // start a queue and init it with the root node
	const result = []; // store the result that will be returned
	// let level = 0;
	while (queue.length > 0) {
		let levelSize = queue.length;
		// let currentLevel = `Level ${level}: \n`;
		let currentLevel = `\n`;
		for (let i = 0; i < levelSize; i++) {
			const node = queue.shift();
			currentLevel += node.val + ",";
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		console.log(currentLevel);
		// level++;
	}
}

const tree = convertArrayToTree([1, 2, 3, 4, 5, 6, 7]);
BreadthFirstSearch(tree);
