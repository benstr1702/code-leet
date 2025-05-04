# 283. Move Zeroes

### Difficulty: Easy

## Problem Overview

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

**Constraints**:

-   1 <= nums.length <= 104
-   -231 <= nums[i] <= 231 - 1

## Examples

### Example 1

**Input**: `nums = [0,1,0,3,12]`  
**Output**: `[1,3,12,0,0]`

### Example 2

**Input**: `nums = [0]`  
**Output**: `[0]`

## Approach

1. **Two Pointers**:

    - **Step 1**: Set 2 pointers : iterator , nonZero
    - **Step 2**: check if nums[iterator] !== 0 , if true swap with nonZero
    - **Step 3**: increment iterator regardless , increment nonZero if the condition was met

2. **Edge Cases**:
    - [Edge case 1: if nums.length === 1 return nums]

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
	if (nums.length === 1) return nums;

	let iterator = 0,
		nonZero = 0;

	while (iterator < nums.length) {
		console.log({ nums, iterator: iterator, nonZero: nonZero });

		// Check if the element on iterator is non-zero
		// If true , swap between the element on non-zero and iterator
		if (nums[iterator] !== 0) {
			//nums[nonZero] = nums[iterator];
			[nums[nonZero], nums[iterator]] = [nums[iterator], nums[nonZero]];
			nonZero++;
		}

		iterator++;
	}

	return nums;
};
```
