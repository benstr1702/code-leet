# 55. Jump Game

### Difficulty: Medium

## Problem Overview

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.  
Return `true` if you can reach the last index, or `false` otherwise.

### Constraints

-   `1 <= nums.length <= 10⁴`
-   `0 <= nums[i] <= 10⁵`

## Examples

### Example 1

**Input**: `nums = [2,3,1,1,4]`  
**Output**: `true`  
**Explanation**: Jump 1 step from index 0 to 1, then 3 steps to the last index.

### Example 2

**Input**: `nums = [3,2,1,0,4]`  
**Output**: `false`  
**Explanation**: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

## Solution Approach

This problem can be solved using a greedy approach, tracking the maximum reachable position as we iterate through the array.

### Algorithm

1. Maintain a variable `maxReach` that represents the furthest index we can reach
2. Iterate through the array:
    - If the current index is beyond our `maxReach`, return `false` (we can't get here)
    - Update `maxReach` to be the maximum of the current `maxReach` and the distance we can jump from the current position
    - If `maxReach` is greater than or equal to the last index, return `true`

### Time Complexity

-   O(n) where n is the length of the input array `nums`

### Space Complexity

-   O(1) as we only use a constant amount of extra space

## Code Implementation

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
	let maxReach = 0;
	for (let i = 0; i < nums.length; i++) {
		if (maxReach < i) return false;
		maxReach = Math.max(maxReach, nums[i] + i);
		if (maxReach >= nums.length - 1) {
			return true;
		}
	}
};
```

## Explanation

The solution works by keeping track of the furthest index we can reach at any point.

1. We initialize `maxReach = 0`, indicating that initially we can only reach the first position.
2. For each position:
    - Check if we can reach the current position (`if (maxReach < i) return false`)
    - Update our maximum reach based on the current position's jump value
    - If our maximum reach extends to or beyond the last index, return `true`

This approach ensures we only evaluate each position once, making it an efficient O(n) solution.
