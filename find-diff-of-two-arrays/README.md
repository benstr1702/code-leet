# 2215. Find the Difference of Two Arrays

### Difficulty: Easy

## Problem Overview

Given two 0-indexed integer arrays `nums1` and `nums2`, return a list `answer` of size 2 where:

- `answer[0]` is a list of all distinct integers in `nums1` which are not present in `nums2`.
- `answer[1]` is a list of all distinct integers in `nums2` which are not present in `nums1`.

Note that the integers in the lists may be returned in any order.

**Constraints**:

- `1 <= nums1.length, nums2.length <= 1000`
- `-1000 <= nums1[i], nums2[i] <= 1000`

## Examples

### Example 1

**Input**: `nums1 = [1,2,3]`, `nums2 = [2,4,6]`  
**Output**: `[[1,3],[4,6]]`  
**Explanation**:

- In `nums1`, the number `2` is present in `nums2`, but `1` and `3` are not. So `answer[0] = [1,3]`.
- In `nums2`, the number `2` is present in `nums1`, but `4` and `6` are not. So `answer[1] = [4,6]`.

### Example 2

**Input**: `nums1 = [1,2,3,3]`, `nums2 = [1,1,2,2]`  
**Output**: `[[3],[]]`  
**Explanation**:

- The number `3` is in `nums1` but not in `nums2`, and it's included only once as we're dealing with distinct values.
- All numbers in `nums2` are found in `nums1`, so `answer[1] = []`.

## Approach

1. **Set-Based Filtering**:

    - **Step 1**: Convert `nums1` and `nums2` to sets to remove duplicates and allow fast lookup.
    - **Step 2**: Iterate through `set1` and collect values not in `set2`.
    - **Step 3**: Iterate through `set2` and collect values not in `set1`.
    - **Step 4**: Return the result as an array of two arrays.
    - **Step 5**: The order of elements in the output arrays does not matter.

2. **Edge Cases**:
    - If both arrays are the same, return `[[], []]`.
    - If one array is empty, return all unique values from the non-empty array in the appropriate output subarray.
    - Duplicate values are ignored; only distinct values are considered.

## Solution Code

```javascript
const findDifference = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const onlyIn1 = [...set1].filter(x => !set2.has(x));
  const onlyIn2 = [...set2].filter(x => !set1.has(x));

  return [onlyIn1, onlyIn2];
};
