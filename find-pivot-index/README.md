# 724. Find Pivot Index

### Difficulty: Easy

## Problem Overview

Given an array of integers `nums`, calculate the pivot index of this array.

The **pivot index** is the index where the sum of all the numbers strictly to the **left** of the index is equal to the sum of all the numbers strictly to the **right** of the index.

If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the left. This also applies to the right edge of the array.

Return the **leftmost** pivot index. If no such index exists, return `-1`.

**Constraints**:

- `1 <= nums.length <= 10⁴`
- `-1000 <= nums[i] <= 1000`

## Examples

### Example 1

**Input**: `nums = [1, 7, 3, 6, 5, 6]`  
**Output**: `3`  
**Explanation**:

- Left sum = `1 + 7 + 3 = 11`  
- Right sum = `5 + 6 = 11`  
- Index 3 is the pivot index because both sums are equal.

### Example 2

**Input**: `nums = [1, 2, 3]`  
**Output**: `-1`  
**Explanation**:

- No index satisfies the pivot condition.

### Example 3

**Input**: `nums = [2, 1, -1]`  
**Output**: `0`  
**Explanation**:

- Left sum = `0`  
- Right sum = `1 + (-1) = 0`  
- Index 0 is the pivot index.

## Approach

1. **Prefix and Suffix Sum Arrays**:

    - **Step 1**: Initialize a prefix sum array with an initial value of `0`.
    - **Step 2**: Traverse through the array and build the prefix sum array.
    - **Step 3**: Calculate the total sum of the array using the prefix array.
    - **Step 4**: Build a suffix array where each element is:  
      `total sum - prefix[i] - nums[i]`.
    - **Step 5**: Traverse the array and return the index where  
      `prefix[i] === suffix[i]`.

2. **Edge Cases**:
    - If the array has only one element, return `0`.
    - If no pivot index is found, return `-1`.

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  if (nums.length === 1) return 0;
  const prefixArray = [0];
  const suffixArray = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixArray.push(prefixArray[i] + nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    suffixArray.push(sum - (prefixArray[i] + nums[i]));
  }

  for (let i = 0; i < nums.length; i++) {
    if (prefixArray[i] === suffixArray[i]) return i;
  }

  return -1;
};
