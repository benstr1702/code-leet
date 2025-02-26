# 45. Jump Game II

### Difficulty: Medium

## Problem Overview

You are given an array `nums` where `nums[i]` represents the maximum number of steps you can jump forward from index `i`. Your task is to determine the minimum number of jumps required to reach the last index.

**Constraints**:

-   `1 <= nums.length <= 10^4`
-   `0 <= nums[i] <= 1000`
-   It is guaranteed that you can always reach the last index.

## Examples

### Example 1

**Input**: `nums = [2, 3, 1, 1, 4]`  
**Output**: `2`  
**Explanation**:

-   Jump `2` steps from index `0` to index `1`.
-   Then jump `3` steps to reach the last index.

### Example 2

**Input**: `nums = [2, 3, 0, 1, 4]`  
**Output**: `2`  
**Explanation**:

-   Jump `2` steps from index `0` to index `1`.
-   Then jump `3` steps to reach the last index.

## Approach

1. **Greedy Algorithm**:

    - **Step 1**: Initialize `jumps` to count the number of jumps taken.
    - **Step 2**: Maintain `currentMax`, which represents the farthest index reachable in the current jump.
    - **Step 3**: Maintain `nextMax`, which represents the farthest index that can be reached in the next jump.
    - **Step 4**: Iterate through `nums` and update `nextMax` with the farthest reachable index.
    - **Step 5**: If the current index reaches `currentMax`, increment `jumps` and update `currentMax` to `nextMax`.

2. **Edge Cases**:
    - If `nums.length == 1`, return `0` since no jumps are needed.
    - If `nums` contains a sequence of large values, the algorithm should efficiently find the shortest path.

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
	// Edge case: if array has only one element, no jumps needed
	if (nums.length <= 1) return 0;

	let jumps = 0; // Count of jumps taken
	let currentMax = 0; // Max position we can reach from current jump
	let nextMax = 0; // Max position we can reach from next jump

	console.log({
		jumps: jumps,
		currentMax: currentMax,
		nextMax: nextMax,
	});
	console.log("Looping over the nums array...");

	for (let i = 0; i < nums.length - 1; i++) {
		// Update the farthest position we can reach from current position
		nextMax = Math.max(nextMax, nums[i] + i);
		console.log("nextMax:", nextMax);

		if (nextMax >= nums.length - 1) return jumps + 1;
		// If we've reached the limit of our current jump
		if (i === currentMax) {
			console.log("Limit of current jump reached");

			jumps++;
			// Update our current reach to the farthest position found
			currentMax = nextMax;

			// If we can already reach the end, no need to continue
			if (currentMax >= nums.length - 1) {
				break;
			}
		}
	}

	return jumps;
};
```
