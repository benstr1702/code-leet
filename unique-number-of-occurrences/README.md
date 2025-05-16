# 1207. Unique Number of Occurrences

### Difficulty: Easy

## Problem Overview

Given an array of integers `arr`, the task is to determine whether the number of occurrences of each value in the array is unique. Return `true` if all the occurrence counts are unique, otherwise return `false`.

This means no two numbers in the array should appear the same number of times.

**Constraints**:

- 1 <= arr.length <= 1000  
- -1000 <= arr[i] <= 1000

## Examples

### Example 1

**Input**: `arr = [1,2,2,1,1,3]`  
**Output**: `true`  
**Explanation**:

- The value `1` occurs 3 times.
- The value `2` occurs 2 times.
- The value `3` occurs 1 time.
- Since all occurrence counts are unique (3, 2, 1), the result is `true`.

### Example 2

**Input**: `arr = [1,2]`  
**Output**: `false`  
**Explanation**:

- The value `1` occurs 1 time.
- The value `2` also occurs 1 time.
- Since two values share the same occurrence count, the result is `false`.

### Example 3

**Input**: `arr = [-3,0,1,-3,1,1,1,-3,10,0]`  
**Output**: `true`  
**Explanation**:

- The value `-3` occurs 3 times.
- The value `0` occurs 2 times.
- The value `1` occurs 4 times.
- The value `10` occurs 1 time.
- All these counts (3, 2, 4, 1) are unique.

## Approach

1. **Frequency Mapping and Uniqueness Check**:

    - **Step 1**: Use a `Map` to count the number of occurrences of each element in the array.
    - **Step 2**: Extract all the frequency values from the `Map`.
    - **Step 3**: Use a `Set` to remove duplicate frequencies.
    - **Step 4**: Compare the size of the `Set` (unique frequencies) to the length of the frequency array.
    - **Step 5**: If the sizes match, all frequencies are unique and return `true`; otherwise, return `false`.

2. **Edge Cases**:
    - If the array contains only one element, the occurrence count is trivially unique (return `true`).
    - Arrays with multiple values but identical frequency counts should return `false`.

## Solution Code

```javascript
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
    if (arr.length === 1) return true;
    const map = new Map();
    arr.forEach((num) => {
        map.set(num, (map.get(num) || 0) + 1);
    });

    const occurrences = [...map.values()];
    return new Set(occurrences).size === occurrences.length;
};
