# 162. Find Peak Element

### Difficulty: Medium

## Problem Overview

A peak element is defined as an element that is strictly greater than its neighbors.  

Given a 0-indexed integer array `nums`, the task is to find a peak element and return its index. If the array contains multiple peaks, returning the index of any one of the peaks is valid.  

We can assume that `nums[-1] = nums[n] = -∞`. This means the elements at the edges of the array are always considered to be greater than out-of-bound neighbors.  

The solution must run in **O(log n)** time.

**Constraints**:

- 1 <= nums.length <= 1000  
- -2³¹ <= nums[i] <= 2³¹ - 1  
- nums[i] != nums[i + 1] for all valid `i`  

## Examples

### Example 1

**Input**: `nums = [1,2,3,1]`  
**Output**: `2`  
**Explanation**:  

- The number `3` at index `2` is greater than its neighbors (`2` and `1`), so it is a peak element.  

---

### Example 2

**Input**: `nums = [1,2,1,3,5,6,4]`  
**Output**: `5`  
**Explanation**:  

- The number `2` at index `1` is greater than its neighbors (`1` and `1`), so it is a peak.  
- The number `6` at index `5` is greater than its neighbors (`5` and `4`), so it is also a peak.  
- Returning either `1` or `5` is correct.  

---

## Approach

1. **Binary Search**:

    - **Step 1**: Initialize two pointers, `left = 0` and `right = nums.length - 1`.  
    - **Step 2**: While `left < right`, calculate the middle index `mid = Math.floor((left + right) / 2)`.  
    - **Step 3**: Compare `nums[mid]` with `nums[mid + 1]`.  
    - **Step 4**:  
        - If `nums[mid] < nums[mid + 1]`, it means the peak lies on the right side, so move `left = mid + 1`.  
        - Otherwise, the peak lies on the left side (including `mid`), so move `right = mid`.  
    - **Step 5**: Continue until `left == right`, which will be the index of a peak element.  

2. **Edge Cases**:
    - If the array has only one element, return index `0`.  
    - Peaks at the first or last index are valid because of the `-∞` assumption.  

---

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	if (nums.length === 1) return 0;

	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] < nums[mid + 1]) {
			// peak on right side
			left = mid + 1;
		} else {
			// peak on left side (mid included)
			right = mid;
		}
	}
	return left;
};
