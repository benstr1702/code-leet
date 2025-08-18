# 994. Rotting Oranges

### Difficulty: Medium

## Problem Overview

You are given an `m x n` grid where each cell can have one of three values:

- `0` representing an empty cell  
- `1` representing a fresh orange  
- `2` representing a rotten orange  

Every minute, any fresh orange that is **4-directionally adjacent** to a rotten orange becomes rotten.  

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return `-1`.

**Constraints**:

- `m == grid.length`  
- `n == grid[i].length`  
- `1 <= m, n <= 10`  
- `grid[i][j]` is `0`, `1`, or `2`.  

## Examples

### Example 1

**Input**:  
`grid = [[2,1,1],[1,1,0],[0,1,1]]`  

**Output**:  
`4`  

**Explanation**:  
- At minute 1, the oranges at `(0,1)` and `(1,0)` become rotten.  
- At minute 2, the orange at `(0,2)` becomes rotten.  
- At minute 3, the orange at `(1,1)` becomes rotten.  
- At minute 4, the orange at `(2,1)` becomes rotten.  

### Example 2

**Input**:  
`grid = [[2,1,1],[0,1,1],[1,0,1]]`  

**Output**:  
`-1`  

**Explanation**:  
The orange at `(2,0)` will never rot because it is not 4-directionally connected to any rotten orange.

### Example 3

**Input**:  
`grid = [[0,2]]`  

**Output**:  
`0`  

**Explanation**:  
Since there are no fresh oranges initially, the answer is `0`.

## Approach

1. **Breadth-First Search (BFS)**:

    - **Step 1**: Traverse the grid to count all fresh oranges and add all initially rotten oranges to a queue.  
    - **Step 2**: If there are no fresh oranges, return `0`.  
    - **Step 3**: Perform BFS from the rotten oranges simultaneously. For each minute, process all rotten oranges in the queue.  
    - **Step 4**: For each rotten orange, try to rot its 4-directional neighbors. If a fresh orange is found, it becomes rotten and is added to the queue. Decrease the fresh orange counter.  
    - **Step 5**: Keep track of minutes elapsed. When no more oranges can rot, check if fresh oranges remain. If yes, return `-1`; otherwise, return the minutes passed.  

2. **Edge Cases**:
    - If there are no fresh oranges initially → return `0`.  
    - If some fresh oranges remain unreachable → return `-1`.  
    - If grid is filled only with empty cells or rotten oranges → return `0`.  

## Solution Code

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
    let minutes = 0;
    const queue = [];
    let freshOrangesCounter = 0;

    // Count fresh oranges and collect rotten ones
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
            if (grid[i][j] === 1) freshOrangesCounter++;
        }
    }

    if (!freshOrangesCounter) return 0;

    // BFS directions
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
            const [row, col] = queue.shift();

            for (const [aRow, aCol] of directions) {
                const newRow = row + aRow;
                const newCol = col + aCol;

                if (
                    newRow >= 0 &&
                    newCol >= 0 &&
                    newRow < grid.length &&
                    newCol < grid[0].length &&
                    grid[newRow][newCol] === 1
                ) {
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                    freshOrangesCounter--;
                    rottenThisMinute++;
                }
            }
        }

        if (rottenThisMinute > 0) minutes++;
    }

    return freshOrangesCounter === 0 ? minutes : -1;
};
