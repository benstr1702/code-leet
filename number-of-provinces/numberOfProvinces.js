/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
	/**
	 * n x n matrix `isConnected` , where isConnected[i][j] = 1 if ith and jth city are directly connected and 0 if not
	 * [
	 * 	[x][1][x]
	 * 	[x][x][x]
	 * 	[x][x][1]
	 * ]
	 */

	const dfs = (node) => {
		visited.add(node);
		for (let j = 0; j < n; j++) {
			if (isConnected[i][j] === 1 && !seen.has(j)) {
				dfs(j);
			}
		}
		return;
	};

	const n = isConnected.length;
	if (n === 1) return 1;
	const seen = new Set();
	let provinces = 0;

	for (let i = 0; i < n; i++) {
		if (!seen.has(i)) {
			provinces += 1;
			dfs(i);
		}
	}

	return provinces;
};
