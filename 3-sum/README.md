# 3Sum

### Difficulty: Medium

## Problem Overview

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that:

-   `i != j`, `i != k`, and `j != k`
-   `nums[i] + nums[j] + nums[k] == 0`

The solution set must not contain duplicate triplets.

**Constraints**:

-   `3 <= nums.length <= 3000`
-   `-10^5 <= nums[i] <= 10^5`

## Examples

### Example 1

**Input**: `nums = [-1,0,1,2,-1,-4]`  
**Output**: `[[-1,-1,2],[-1,0,1]]`  
**Explanation**:

-   The triplets that sum to zero are `[-1, -1, 2]` and `[-1, 0, 1]`.
-   The order of triplets and numbers within triplets does not matter.

### Example 2

**Input**: `nums = [0,1,1]`  
**Output**: `[]`  
**Explanation**:

-   No triplet sums to zero.

### Example 3

**Input**: `nums = [0,0,0]`  
**Output**: `[[0,0,0]]`  
**Explanation**:

-   The only possible triplet sums to zero.

## Approach

### Two-Pointer Approach:

1. **Sort the Array**:
    - Sorting helps eliminate duplicate triplets efficiently.
2. **Iterate Over Each Element**:
    - Fix one element and use two pointers to find the remaining two elements.
3. **Use Two Pointers**:
    - Initialize two pointers: one at the next element (`left`), and another at the end (`right`).
4. **Check for Triplets**:

    - Compute the sum of the fixed element and the two pointers.
    - If the sum equals zero, add the triplet to the result.
    - Move pointers to avoid duplicate triplets.

5. **Adjust Pointers Based on Sum**:
    - If the sum is less than zero, move the left pointer to the right.
    - If the sum is greater than zero, move the right pointer to the left.

### Edge Cases:

-   An array with fewer than 3 elements (`nums.length < 3`) should return `[]`.
-   An array with all zeroes (`[0,0,0]`) should return `[[0,0,0]]`.
-   Large arrays up to `3000` elements should be handled efficiently.

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
	// Sort array by ascending order
	nums.sort((a, b) => a - b);
	const result = [];

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const currentSum = nums[i] + nums[left] + nums[right];

			if (currentSum === 0) {
				result.push([nums[i], nums[left], nums[right]]);
				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;
				left++;
				right--;
			} else if (currentSum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return result;
};
```
