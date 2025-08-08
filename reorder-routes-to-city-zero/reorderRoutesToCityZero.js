/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

const buildGraphFromConnections = (n, connections) => {
	const graph = {};
	for (let i = 0; i < n; i++) {
		graph[i] = [];
	}

	for (let [from, to] of connections) {
		graph[from].push({ city: to, needsRedirection: true });
		graph[to].push({ city: from, needsRedirection: false });
	}
	console.log("graph:", graph);
	return graph;
};

const minReorder = (n, connections) => {
	const graph = buildGraphFromConnections(n, connections);
	const visitedCities = new Set();
	let counter = 0;
	const dfs = (city) => {
		visitedCities.add(city);
		for (let neighbor of graph[city]) {
			if (!visitedCities.has(neighbor.city)) {
				if (neighbor.needsRedirection) counter++;
				dfs(neighbor.city);
			}
		}
	};
	dfs(0);
	return counter;
};

console.log(
	minReorder(6, [
		[0, 1],
		[1, 3],
		[2, 3],
		[4, 0],
		[4, 5],
	])
);
