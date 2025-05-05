# 238. Product of Array

### Difficulty: Easy 

## Problem Overview

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

**Constraints**:

-   2 <= nums.length <= 105
-   -30 <= nums[i] <= 30

## Examples

### Example 1

**Input**: nums = [1,2,3,4]
**Output**: [24,12,8,6]
**Explanation**:


### Example 2

**Input**: nums = [-1,1,0,-3,3] 
**Output**: [0,0,9,0,0] 


## Approach

1. **[Approach Name]**:


2. **Edge Cases**:
     - If nums.length === 2 , return [nums[1] , nums[0]]

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */

const calculatePrefix = (i , array) => {
    if (i === 0) return 1;
    let prefix = 1;
    for (let j = 0; j < i ; j++){
        prefix *= array[j];
       console.log({
        "j":j,
        "array[j]":array[j],
        "prefix":prefix
       }) 
        
    }
    return prefix
    
}

const calculateSuffix = (i , array) => {

    if (i === array.length - 1) return 1;
    let suffix = 1;
    for (let j = i + 1; j < array.length ; j ++  ) {
       suffix *= array[j]
        console.log({
        "j":j,
        "array[j]":array[j],
        "suffix":suffix
       })
    }
    return suffix;
}


const productExceptSelf = (nums) => {
    if (nums.length === 2) return [1,1] 
    const answer = []
    for (let i = 0 ; i < nums.length ; i++) {
       answer.push((calculatePrefix(i,nums)) * (calculateSuffix(i,nums))) 
    }
    return answer;

    
};

productExceptSelf(nums)

```
