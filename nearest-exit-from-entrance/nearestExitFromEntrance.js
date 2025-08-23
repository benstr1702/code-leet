/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = (maze, entrance) => {
	const m = maze.length;
	const n = maze[0].length;
	console.log("Initial maze:", maze);
	console.log("maze[0][1] =", maze[0][1]);

	const queue = [[entrance[0], entrance[1], 0]];
	//maze[[entrance[0]][entrance[1]]] = "+";
	maze[entrance[0]][entrance[1]] = "+";

	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];
	while (queue.length > 0) {
		const levelSize = queue.length;
		for (let i = 0; i < levelSize; i++) {
			const [row, col, steps] = queue.shift();
			console.log("Processing:", row, col, steps);
			console.log(
				"Is border?",
				row === 0 || row === m - 1 || col === 0 || col === n - 1
			);
			console.log(
				"Is entrance?",
				row === entrance[0] && col === entrance[1]
			);
			// is exit node
			if (row === 0 || row === m - 1 || col === 0 || col === n - 1) {
				// is entrance node
				if (!(row === entrance[0] && col === entrance[1])) {
					return steps;
				}
			}
			for (const [aRow, aCol] of directions) {
				const newRow = row + aRow;
				const newCol = col + aCol;
				console.log(
					`Checking neighbor [${newRow}, ${newCol}]:`,
					maze[newRow]?.[newCol]
				);
				if (
					newRow >= 0 &&
					newRow < m &&
					newCol >= 0 &&
					newCol < n &&
					maze[newRow][newCol] !== "+"
				) {
					// not wall and in bounds
					queue.push([newRow, newCol, steps + 1]);
					maze[newRow][newCol] = "+";
				}
			}
		}
	}
	return -1;
};

console.log(nearestExit([[".", "+"]], [0, 0]));
