# Keys and Rooms

### Difficulty: Medium

## Problem Overview

There are `n` rooms in a building, labeled from `0` to `n - 1`. Each room may contain keys to other rooms. All rooms are initially locked except for room `0`.

You are given an array `rooms` where `rooms[i]` is the list of keys in room `i`. A key with the number `j` opens room `j`.

You can freely move between rooms as long as you have the key to that room. Your task is to determine whether it is possible to visit **all the rooms**, starting from room `0`.

**Constraints**:

- `n == rooms.length`
- `2 <= n <= 1000`
- `0 <= rooms[i].length <= 1000`
- `0 <= rooms[i][j] < n`
- All values of `rooms[i][j]` are **unique**

## Examples

### Example 1

**Input**: `rooms = [[1], [2], [3], []]`  
**Output**: `true`  
**Explanation**:

- Start at room `0`, pick up key to room `1`
- Go to room `1`, pick up key to room `2`
- Go to room `2`, pick up key to room `3`
- All rooms have been visited

### Example 2

**Input**: `rooms = [[1,3],[3,0,1],[2],[0]]`  
**Output**: `false`  
**Explanation**:

- You start at room `0`, get keys to room `1` and `3`
- From room `1`, you don’t get the key to room `2`
- Room `2` remains unreachable

## Approach

1. **Depth-First Search (DFS)**:

    - **Step 1**: Initialize a `Set` called `visited` to track visited rooms.
    - **Step 2**: Define a recursive `dfs(node)` function.
    - **Step 3**: In `dfs`, return early if the room has already been visited.
    - **Step 4**: Otherwise, mark the room as visited.
    - **Step 5**: For each key in the current room, recursively call `dfs` on that room.
    - **Step 6**: After the traversal, check if the number of visited rooms equals the total number of rooms.

2. **Edge Cases**:
    - If the graph is disconnected (some rooms cannot be reached from room `0`), return `false`.
    - If `rooms[0]` is empty and `rooms.length > 1`, return `false`.

## Solution Code

```javascript
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
	const visited = new Set();

	function dfs(node) {
		if (visited.has(node)) return;
		visited.add(node);

		for (const neighbor of rooms[node]) {
			if (!visited.has(neighbor)) dfs(neighbor);
		}
	}

	dfs(0);
	return visited.size === rooms.length;
};
