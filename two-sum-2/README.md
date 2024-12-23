# 167. Two Sum II - Input Array is Sorted

### Difficulty: Easy

## Problem Overview

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

**Constraints**:

-   2 <= numbers.length <= 3 \* 104
-   -1000 <= numbers[i] <= 1000
-   numbers is sorted in non-decreasing order.
-   -1000 <= target <= 1000
-   The tests are generated such that there is exactly one solution.

## Examples

### Example 1

**Input**: `numbers = [2,7,11,15], target = 9`  
**Output**: `[1,2]`  
**Explanation**: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

### Example 2

**Input**: `numbers = [2,3,4], target = 6`  
**Output**: `[1,3]`  
**Explanation**: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

## Approach

1. **Two Pointer Approach**:

    - **Step 1**: Set Two pointers : left and right. Initialize left to be at numbers[0] and right to be at numbers.length - 1;
    - **Step 2**: Start a while loop , condition being as long as the left pointer is smaller than the right pointer.
    - **Step 3**: For every iteration of the loop, check if the sum in element at numbers[left] and numbers[right] is equal , smaller or bigger than `target`.
    - **Step 4**: If equal , return [left + 1 , right + 1]. If smaller increment the left pointer by 1. And if bigger than target decrement the right pointer by 1.

## Solution Code

```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
	let left = 0,
		right = numbers.length - 1;
	while (left < right) {
		let result = numbers[left] + numbers[right];
		if (result === target) {
			return [left + 1, right + 1];
		} else if (result > target) {
			right--;
		} else {
			left++;
		}
	}
};

console.log(twoSum([1, 3, 4, 5, 7, 10, 11], 9));
```
