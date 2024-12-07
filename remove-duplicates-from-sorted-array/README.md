# 26. Remove Duplicates From Sorted Array

### Difficulty: Easy

## Problem Overview

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

-   Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
-   Return k.

## Custom Judge:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

```

**Constraints**:

-   1 <= nums.length <= 3 \* 104
-   100 <= nums[i] <= 100
-   nums is sorted in non-decreasing order.

## Examples

### Example 1

**Input**: `nums = [1,1,2]`
**Output**: `2, nums = [1,2,_]`
**Explanation**: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

### Example 2

**Input**: `nums = [0,0,1,1,1,2,2,3,3,4]`
**Output**: `5, nums = [0,1,2,3,4,_,_,_,_,_]`
**Explanation**: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

## Approach

1. **Two Pointer Approach**:

    - **Step 1**: Define and initialize pointer k = 1 since the first element will always be unique.
    - **Step 2**: Start a loop to iterate over all the elements of the array and start the loop at the **2nd** element.
    - **Step 3**: Compare each element to the last unique element (k-1), if matches skip (not unique) if doesn't: set the current element (nums[i]) as the next unique element (k) + increment **k** by 1.
    - **Step 4**: return **k**

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
	let k = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[k - 1]) {
			continue;
		} else {
			nums[k] = nums[i];
			k++;
		}
	}
	return k;
};
```
