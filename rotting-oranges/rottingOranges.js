/**
 * @param {number[][]} grid
 * @return {number}
 */
// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
const orangesRotting = (grid) => {
	let minutes = 0;
	const queue = [];
	let freshOrangesCounter = 0;
	for (let i = 0; i < grid.length; i++) {
		// goes over the rows

		for (let j = 0; j < grid[0].length; j++) {
			// goes over the columns
			if (grid[i][j] === 2) {
				queue.push([i, j]);
			}
			if (grid[i][j] === 1) freshOrangesCounter++;
		}
	}

	if (!freshOrangesCounter) return 0;
	// bfs
	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];
	while (queue.length > 0) {
		const currentLevelSize = queue.length;
		let rottenThisMinute = 0;

		for (let i = 0; i < currentLevelSize; i++) {
			const [row, col] = queue.shift(); // rotten orange coords

			for (const [aRow, aCol] of directions) {
				const newRow = row + aRow;
				const newCol = col + aCol;

				if (
					newRow >= 0 &&
					newCol >= 0 &&
					newRow < grid.length &&
					newCol < grid[0].length &&
					grid[(newRow, newCol)] === 1
				) {
					grid[(newRow, newCol)] = 2;
					queue.push([newRow, newCol]);
					freshOrangesCounter--;
					rottenThisMinute++;
				}

				if (
					newRow >= 0 &&
					newRow < grid.length &&
					newCol >= 0 &&
					newCol < grid[0].length &&
					grid[(newRow, newCol)] === 1
				) {
				}
			}
		}
		if (rottenThisMinute > 0) minutes++;
		grid[(col, row)];
	}
	return freshOrangesCounter === 0 ? minutes : -1;
};
