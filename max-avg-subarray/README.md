# 643. Maximum Average Subarray I
### Difficulty: Easy

## Problem Overview
Given an integer array `nums` consisting of `n` elements and an integer `k`, find a contiguous subarray of length `k` that has the maximum average value and return this value. Any answer with a calculation error less than 10^-5 will be accepted.

**Constraints**:
- `n == nums.length`
- `1 <= k <= n <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Examples

### Example 1
**Input**: `nums = [1,12,-5,-6,50,3], k = 4`  
**Output**: `12.75000`  
**Explanation**:
- The subarray of length 4 with maximum average is `[12,-5,-6,50]`.
- The sum is `12 - 5 - 6 + 50 = 51`.
- The average is `51 / 4 = 12.75`.

### Example 2
**Input**: `nums = [5], k = 1`  
**Output**: `5.00000`  
**Explanation**:
- There is only one element, so the maximum average is `5 / 1 = 5`.

## Approach

1. **Sliding Window**:
    - **Step 1**: Initialize a sliding window of size `k` starting from the beginning of the array.
    - **Step 2**: Calculate the sum of the first `k` elements.
    - **Step 3**: Calculate the average of these `k` elements and set it as the initial maximum average.
    - **Step 4**: Slide the window by removing the leftmost element and adding the next element on the right.
    - **Step 5**: Recalculate the sum and update the maximum average if the new average is greater.
    - **Step 6**: Repeat steps 4-5 until the end of the array is reached.
    - **Step 7**: Return the maximum average found.

2. **Edge Cases**:
    - If the array has only one element (i.e., `n = 1`), return that element as a float.
    - If `k` equals `n`, return the average of the entire array.

## Solution Code

```python
class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        left = 0 
        right = left + k
        n = len(nums)
        sum = 0
        # Edge Case: If only one element in the list, return the element in float form
        if n == 1: return float(nums[0])
        # First avg
        for i in range(k): # stops at index k-1
            sum += nums[i]
        max_avg = sum / k
        while right < n:
            sum = sum - nums[left] + nums[right]
            max_avg = max(max_avg, sum/k) 
            left += 1
            right += 1
        return max_avg
        
if __name__ == "__main__":
    print(Solution().findMaxAverage([1,12,-5,-6,50,3], 4))
```

## Time and Space Complexity

- **Time Complexity**: O(n), where n is the length of the input array. We iterate through the array once to calculate the first window sum and then slide the window through the remaining elements.
  
- **Space Complexity**: O(1), as we only use a constant amount of extra space regardless of the input size.

## Alternative Approaches

While the sliding window approach is optimal for this problem, we could also consider:

1. **Brute Force**:
   - Calculate the average for every possible subarray of length k.
   - Time Complexity: O(n*k), which is less efficient than the sliding window approach.

2. **Prefix Sum**:
   - Calculate a prefix sum array and then use it to find the sum of any contiguous subarray in O(1) time.
   - This would still be O(n) time complexity overall but might be slightly less efficient than the sliding window for this specific problem due to the extra space required.