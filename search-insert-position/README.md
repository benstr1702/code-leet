# 35. Search Insert Position

### Difficulty: Easy

## Problem Overview

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
**Constraints**:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

## Examples

### Example 1

**Input**: `nums = [1,3,5,6], target = 5`  
**Output**: `2`  
**Explanation**: -

### Example 2

**Input**: `nums = [1,3,5,6], target = 2`  
**Output**: `1`  
**Explanation**: -

## Approach

1. **[Main Algorithm/Method Name]**:

    - **Step 1**: Set starting left , right and mid variables using the first , last and a rounding down sum of both of those divided by 2. 
    - **Step 2**: create a while loop that only exists when the left pointer is bigger than the right pointer. 
    - **Step 3**:check if the target is bigger , smaller or matches the number in the mid index. 
    - **Step 4**:if matches , return mid, if bigger set the new left index as mid + 1, if smaller , set the new right index as mid - 1.
    - **Step 5**: return the left pointer at the end of the loop , so that if the target doesnt exist in the array , the estimated position will still be returned.


## Solution Code
```js/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let left = 0 ; let right = nums.length - 1;
   let mid = Math.floor((left + right) / 2);
   while (left <= right){
    if (nums[mid] === target){
        return mid;
    }
    else if (target > nums[mid]){
        left = mid + 1;
    }
    else{
        right = mid - 1;
    }
    mid = Math.floor((left+right)/2);
   }
   return left;
};```
