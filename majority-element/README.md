# [169] Majority Element

### Difficulty: Easy

## Problem Overview

The task is to find the majority element in an array of integers `nums`. A majority element is defined as an element that appears more than `n / 2` times, where `n` is the size of the array. It is guaranteed that the input array always contains a majority element.

**Constraints**:

-   The array `nums` will have a length between 1 and \(10^5\).
-   Each element in `nums` is a 32-bit signed integer.
-   Time complexity should ideally be \(O(n)\).
-   Space complexity should ideally be \(O(n)\) or \(O(1)\).

## Examples

### Example 1

**Input**: `[3, 2, 3]`  
**Output**: `3`  
**Explanation**: The element `3` appears 2 times, which is more than `n / 2 = 3 / 2 = 1.5`.

### Example 2

**Input**: `[2, 2, 1, 1, 1, 2, 2]`  
**Output**: `2`  
**Explanation**: The element `2` appears 4 times, which is more than `n / 2 = 7 / 2 = 3.5`.

## Approach

1. **HashMap Counting**:

    - **Step 1**: Create a `hashMap` to store the frequency of each number.
    - **Step 2**: Calculate the `majority` threshold as `Math.floor(nums.length / 2)`.
    - **Step 3**: Iterate through the array, updating the count of each number in the `hashMap`.
    - **Step 4**: Check if the count of the current number exceeds the `majority` threshold. If so, return that number.

2. **Edge Cases**:
    - A single-element array will return that element as the majority.
    - Arrays with all identical elements will return that element.

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
	const hashMap = new Map();
	const majority = Math.floor(nums.length / 2);
	console.log("majority:", majority);
	for (let number of nums) {
		hashMap.set(number, (hashMap.get(number) || 0) + 1);
		if (hashMap.get(number) > majority) {
			return number;
		}
	}
};

console.log(majorityElement([6, 5, 5]));
```
