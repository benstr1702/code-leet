# 1926. Nearest Exit from Entrance in Maze

### Difficulty: Medium

## Problem Overview

You are given an `m x n` matrix `maze` (0-indexed) with empty cells (represented as `'.'`) and walls (represented as `'+'`). You are also given the entrance of the maze, where `entrance = [entranceRow, entranceCol]` denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze.  

Your goal is to find the **nearest exit** from the entrance. An **exit** is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.  

Return the number of steps in the shortest path from the entrance to the nearest exit, or `-1` if no such path exists.

**Constraints**:

- `maze.length == m`
- `maze[i].length == n`
- `1 <= m, n <= 100`
- `maze[i][j]` is either `'.'` or `'+'`
- `entrance.length == 2`
- `0 <= entranceRow < m`
- `0 <= entranceCol < n`
- `entrance` will always be an empty cell

## Examples

### Example 1

**Input**:  
`maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]]`, `entrance = [1,2]`  
**Output**: `1`  
**Explanation**:  
There are 3 exits: `[1,0]`, `[0,2]`, and `[2,3]`.  
- From entrance `[1,2]`, you can reach `[0,2]` in **1 step**.  
- `[1,0]` requires 2 steps.  
- `[2,3]` is unreachable.  
Thus, the nearest exit is `[0,2]` with **1 step**.

---

### Example 2

**Input**:  
`maze = [["+","+","+"],[".",".","."],["+","+","+"]]`, `entrance = [1,0]`  
**Output**: `2`  
**Explanation**:  
There is only 1 exit: `[1,2]`.  
- From entrance `[1,0]`, you need **2 steps** to reach `[1,2]`.  
- The entrance itself does not count as an exit.  

---

### Example 3

**Input**:  
`maze = [[".","+"]], entrance = [0,0]`  
**Output**: `-1`  
**Explanation**:  
There are no exits in this maze.

---

## Approach

1. **Breadth-First Search (BFS)**:

    - **Step 1**: Initialize a queue starting from the entrance with step count `0`.  
    - **Step 2**: Mark the entrance as visited by replacing it with `'+'`.  
    - **Step 3**: While the queue is not empty, process each position:
        - Check if the current cell is at the border and **not the entrance**. If yes, return the step count.  
        - Otherwise, explore its neighbors (up, down, left, right).  
    - **Step 4**: For each valid neighbor (inside bounds and not a wall), add it to the queue with incremented steps and mark as visited.  
    - **Step 5**: If the queue is exhausted and no exit is found, return `-1`.  

2. **Edge Cases**:
    - Maze is `1x1` (entrance is the only cell, no exits).  
    - Entrance is on the border but should **not** count as an exit.  
    - Multiple exits exist — BFS ensures we find the nearest one.  

---

## Solution Code

```javascript
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = (maze, entrance) => {
	const m = maze.length;
	const n = maze[0].length;

	const queue = [[entrance[0], entrance[1], 0]];

    maze[entrance[0]][entrance[1]] = "+"; // mark entrance as visited

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

			// check if exit (border cell but not entrance)
			if (row === 0 || row === m
