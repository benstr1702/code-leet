# 547. Number of Provinces

### Difficulty: Medium

## Problem Overview

There are `n` cities. Some of them are directly connected, while others are not. If city `a` is directly connected to city `b`, and city `b` is directly connected to city `c`, then city `a` is **indirectly** connected to city `c`.

A **province** is a group of directly or indirectly connected cities, and no other cities outside of the group.

You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `i`th city and the `j`th city are directly connected, and `0` otherwise.

Return the **total number of provinces**.

**Constraints**:

- `1 <= n <= 200`
- `isConnected[i][j]` is `1` or `0`
- `isConnected[i][i] == 1` (a city is always connected to itself)
- `isConnected[i][j] == isConnected[j][i]` (connections are bidirectional)

## Examples

### Example 1

**Input**: `isConnected = [[1,1,0],[1,1,0],[0,0,1]]`  
**Output**: `2`  
**Explanation**:

- Cities 0 and 1 are connected directly → 1 province
- City 2 is isolated → 1 more province

Total: 2 provinces

### Example 2

**Input**: `isConnected = [[1,0,0],[0,1,0],[0,0,1]]`  
**Output**: `3`  
**Explanation**:

- All cities are isolated and only connected to themselves

Total: 3 provinces

## Approach

1. **Depth-First Search (DFS)**:

    - **Step 1**: Loop through each city from 0 to n-1.
    - **Step 2**: If a city has not been visited, it's part of a new province.
    - **Step 3**: Use DFS to visit all cities connected (directly or indirectly) to it.
    - **Step 4**: Mark each visited city to avoid recounting it.
    - **Step 5**: Count each DFS start as a new province.

2. **Edge Cases**:
    - If there's only 1 city, return 1 (since it's always connected to itself).
    - If all cities are isolated, the result is `n`.
    - If all cities are fully connected, the result is `1`.

## Solution Code

```javascript
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
	const n = isConnected.length;
	if (n === 1) return 1;

	const seen = new Set();

	const dfs = (i) => {
		seen.add(i);
		for (let j = 0; j < n; j++) {
			if (isConnected[i][j] === 1 && !seen.has(j)) {
				dfs(j);
			}
		}
	};

	let provinces = 0;

	for (let i = 0; i < n; i++) {
		if (!seen.has(i)) {
			provinces += 1;
			dfs(i);
		}
	}

	return provinces;
};
