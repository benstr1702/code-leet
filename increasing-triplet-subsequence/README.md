ncreasing Triplet Subsequence

### Difficulty: Medium

## Problem Overview

Given an integer array `nums`, return `true` if there exists a triplet of indices `(i, j, k)` such that:

- `i < j < k`
- `nums[i] < nums[j] < nums[k]`

Otherwise, return `false`.

This means we are looking for **three numbers in increasing order** that also appear in order in the array (not necessarily adjacent).

**Constraints**:

- `1 <= nums.length <= 5 * 10⁵`
- `-2³¹ <= nums[i] <= 2³¹ - 1`

## Examples

### Example 1

**Input**: `nums = [1, 2, 3, 4, 5]`  
**Output**: `true`  
**Explanation**:

- The numbers `1 < 2 < 3` form an increasing triplet, and their indices are in order.

### Example 2

**Input**: `nums = [5, 4, 3, 2, 1]`  
**Output**: `false`  
**Explanation**:

- The array is strictly decreasing, so no increasing triplet exists.

### Example 3

**Input**: `nums = [2, 1, 5, 0, 4, 6]`  
**Output**: `true`  
**Explanation**:

- The triplet `(0, 4, 6)` at indices `(3, 4, 5)` satisfies `0 < 4 < 6`.

## Approach

1. **Greedy Two-Variable Tracking**:

    - **Step 1**: Initialize two variables `first` and `second` to `Infinity`.
    - **Step 2**: Iterate through the array.
    - **Step 3**: For each number `n`:
        - If `n <= first`, update `first = n`.
        - Else if `n <= second`, update `second = n`.
        - Else, we've found a number greater than both → return `true`.
    - **Step 4**: If loop finishes without finding a triplet, return `false`.

2. **Edge Cases**:
    - If the array has fewer than 3 elements, return `false` immediately.
    - All elements are equal or decreasing — still return `false`.

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let n of nums) {
        if (n <= first) {
            first = n;
        } else if (n <= second) {
            second = n;
        } else {
            return true;
        }
    }

    return false;
};

