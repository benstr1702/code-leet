const { convertArrayToGraph } = require("../util/convertArrayToGraph");
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

const canVisitAllRooms = (rooms) => {
	const graph = convertArrayToGraph(rooms);
	const visited = new Set();
	console.log("set:", visited);

	function dfs(node) {
		if (visited.has(node)) return;
		visited.add(node);
		console.log("set:", visited);

		for (const neighbor of graph[node]) {
			if (!visited.has(neighbor)) dfs(neighbor);
		}
	}

	dfs(0);
	return visited.size === rooms.length;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
