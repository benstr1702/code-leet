/**
 * 
 * @param  {number[][] inputArray} 
 * @return {graph {}}
 * 
 *	{ 
		0: [1,3],
		1: [3,0,1],
		2: [2],
		3: [0]

    } 
 * 
 */

function convertArrayToGraph(inputArray) {
	if (!inputArray || inputArray.length === 0)
		return "Please enter a valid input array";

	const graph = {};

	inputArray.forEach((neighbors, nodeId) => {
		graph[nodeId] = neighbors;
	});

	return graph;
}

module.exports = {
	convertArrayToGraph,
};
