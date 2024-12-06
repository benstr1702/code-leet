# 704. Binary Search

### Difficulty: Easy

## Problem Overview

Given a sorted array of integers, `nums`, in ascending order, and an integer `target`, the task is to write a function that searches for `target` in `nums`. If `target` exists, return its index. If it does not exist, return `-1`.

**Constraints**:

-   The function should achieve a time complexity of \(O(\log n)\).
-   This can be achieved with the **Binary Search** algorithm, which is designed for ordered lists and efficiently narrows down the search space.

## Examples

### Example 1

**Input**: `nums = [-1, 0, 3, 5, 9, 12]`, `target = 9`  
**Output**: `4`  
**Explanation**: The integer `9` exists in `nums` at index `4`.

### Example 2

**Input**: `nums = [-1, 0, 3, 5, 9, 12]`, `target = 2`  
**Output**: `-1`  
**Explanation**: The integer `2` does not exist in `nums`, so the function returns `-1`.

## Approach

1. **Binary Search Algorithm**:

    - **Step 1**: Initialize two pointers: `left` at the start of the array (`0`) and `right` at the end of the array (`len(nums) - 1`).
    - **Step 2**: Loop until `left` is less than or equal to `right`.
    - **Step 3**: Calculate the midpoint `mid` using `(left + right) // 2`.
    - **Step 4**: Check if the element at `mid` equals `target`:
        - If yes, return `mid`.
        - If the element at `mid` is less than `target`, update `left` to `mid + 1`.
        - If the element at `mid` is greater than `target`, update `right` to `mid - 1`.
    - **Step 5**: If the loop exits without finding `target`, return `-1`.

2. **Edge Cases**:
    - If `nums` has only one element, check if it matches `target`.
    - If `target` is smaller than all elements in `nums` or larger than all elements, return `-1` immediately.

## Solution Code
