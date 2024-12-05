### 88. Merge Sorted Array

### Difficulty: Easy

## Problem Overview

You are given two integer arrays **nums1** and **nums2**, sorted in non-decreasing order, and two integers **m** and **n**, representing the number of elements in **nums1** and **nums2** respectively.

Merge **nums1** and **nums2** into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

**Constraints**:

-   nums1.length == m + n
-   nums2.length == n
-   0 <= m, n <= 200
-   1 <= m + n <= 200
-   -109 <= nums1[i], nums2[j] <= 109

## Examples

### Example 1

**Input**: `nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`  
**Output**: `[1,2,2,3,5,6]`  
**Explanation**: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

### Example 2

**Input**: `nums1 = [1], m = 1, nums2 = [], n = 0`  
**Output**: `[1]`  
**Explanation**: The arrays we are merging are [1] and [].
The result of the merge is [1].

## Approach

1. **[Main Algorithm/Method Name]**:

    - **Step 1**: [Describe the first step of your approach.]
    - **Step 2**: [Describe the second step, if applicable.]
    - **Step 3**: [Continue describing steps until the approach is fully detailed.]
    - **Step 4**: [Add any additional steps or considerations.]

## Solution Code

```js
/\*\*

-   @param {number[]} nums1
-   @param {number} m
-   @param {number[]} nums2
-   @param {number} n
-   @return {void} Do not return anything, modify nums1 in-place instead.
    \*/
    const merge = (nums1, m, nums2, n) => {
    let p1 = m - 1;
    let p2 = n - 1;
    let megaPointer = m + n - 1;
    while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
    nums1[megaPointer] = nums1[p1];
    p1--;
    } else {
    nums1[megaPointer] = nums2[p2];
    p2--
    }
    megaPointer--;
    }
    };
```
