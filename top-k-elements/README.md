# Top K Frequent Elements

### Difficulty: Medium

## Problem Overview

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in **any order**.

**Constraints**:

-   `1 <= nums.length <= 10⁵`
-   `-10⁴ <= nums[i] <= 10⁴`
-   `k` is in the range `[1, the number of unique elements in the array]`
-   It is guaranteed that the answer is unique.
-   **Follow up**: Your algorithm's time complexity must be better than **O(n log n)**, where `n` is the array's size.

## Examples

### Example 1

**Input**: `nums = [1,1,1,2,2,3], k = 2`  
**Output**: `[1,2]`  
**Explanation**:

-   Element `1` appears 3 times, and element `2` appears 2 times — these are the top 2 frequent elements.

### Example 2

**Input**: `nums = [1], k = 1`  
**Output**: `[1]`  
**Explanation**:

-   There is only one element in the array, and thus it is the most frequent.

## Approach

1. **Frequency Map + Sorting**:

    - **Step 1**: Use a `Map` to count the frequency of each number in the array.
    - **Step 2**: Convert the map into an array of `[element, frequency]` pairs.
    - **Step 3**: Sort the array in descending order based on frequency.
    - **Step 4**: Take the first `k` elements from the sorted array.
    - **Step 5**: Return only the element part (not frequency) from the top `k` entries.

2. **Edge Cases**:
    - If the array has only one element, return that element.
    - If all elements are unique and `k` equals the length of the array, return the entire array.

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
	const freqMap = new Map();
	for (const num of nums) {
		freqMap.set(num, freqMap.get(num) ? freqMap.get(num) + 1 : 1);
	}
	const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
	return sorted.slice(0, k).map((item) => item[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 5, 5], 2)); // Output: [1, 2]
```
