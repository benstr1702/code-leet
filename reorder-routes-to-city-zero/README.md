# 1466. Reorder Routes to Make All Paths Lead to the City Zero
### Difficulty: Medium

## Problem Overview
Given `n` cities numbered from `0` to `n-1` and `n-1` roads forming a tree structure, we need to reorient some roads so that every city can reach city `0` (the capital). Roads are represented by `connections` where `connections[i] = [ai, bi]` represents a directed road from city `ai` to city `bi`. We need to find the minimum number of edges that must be changed to allow all cities to reach city `0`.

**Constraints**:
- `2 <= n <= 5 * 10^4`
- `connections.length == n - 1`
- `connections[i].length == 2`
- `0 <= ai, bi <= n - 1`
- `ai != bi`

## Examples
### Example 1
**Input**: `n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]`  
**Output**: `3`  
**Explanation**:
- Change the direction of edges show in red such that each node can reach the node 0 (capital).
- We need to reverse edges [0,1], [1,3], and [4,5] to make all cities reachable to city 0.

### Example 2
**Input**: `n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]`  
**Output**: `2`  
**Explanation**:
- Change the direction of edges [1,2] and [3,4] to allow all cities to reach city 0.

## Approach
1. **Graph Construction + DFS Traversal**:
    - **Step 1**: Build an undirected graph where each edge stores both directions with a flag indicating if redirection is needed.
    - **Step 2**: For each original edge `[from, to]`, add two entries: `from→to` (needs redirection) and `to→from` (doesn't need redirection).
    - **Step 3**: Start DFS from city 0 and traverse all connected cities using a visited set to avoid cycles.
    - **Step 4**: During traversal, count edges that have `needsRedirection: true` - these represent edges pointing away from city 0.
    - **Step 5**: Return the total count of redirections needed.

2. **Edge Cases**:
    - If `n = 1`, no roads exist, return `0`.
    - The problem guarantees the graph forms a tree, so all cities will be reachable from city 0 after reordering.

## Solution Code
```javascript
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
```