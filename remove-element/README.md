# 27. Remove Element

### Difficulty: Easy

## Problem Overview

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

Consider the number of elements in `nums` which are not equal to `val` to be `k`. To get accepted, you need to do the following things:

-   Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.
-   Return `k`.

## Custom Judge:

```javascript
let nums = [...]; // Input array
let val = ...; // Value to remove
let expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.

let k = removeElement(nums, val); // Calls your implementation

assert k === expectedNums.length;
nums.sort((a, b) => a - b); // Sort the first k elements of nums
for (let i = 0; i < k; i++) {
    assert nums[i] === expectedNums[i];
}
```

**Constraints**:

-   `0 <= nums.length <= 100`: The array can be empty.
-   `0 <= nums[i] <= 50`: Array items are non-negative and do not exceed 50.
-   `0 <= val <= 100`: The requested value is non-negative and does not exceed 100.

## Examples

### Example 1

**Input**: `nums = [3, 2, 2, 3], val = 3`  
**Output**: `2, nums = [2, 2, _, _]`  
**Explanation**: Your function should return `k = 2`, with the first two elements of `nums` being `2`. It does not matter what you leave beyond the returned `k` (hence they are underscores).

### Example 2

**Input**: `nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2`  
**Output**: `5, nums = [0, 1, 4, 0, 3, _, _, _]`  
**Explanation**: Your function should return `k = 5`, with the first five elements of `nums` containing `0, 1, 4, 0,` and `3`. Note that the five elements can be returned in any order. It does not matter what you leave beyond the returned `k` (hence they are underscores).

---

## Approach

1. **Two-Pointer Method**:

    - **Step 1**: Define two pointers:
        - `i`: Tracks the position for placing valid elements (those not equal to `val`).
        - `j`: Iterates through the array to inspect each element.
    - **Step 2**: For every element at position `j`:
        - If `nums[j] === val`, skip it (`continue`).
        - Otherwise, copy `nums[j]` to `nums[i]` and increment `i`.
    - **Step 3**: After processing all elements, `i` will indicate the number of elements not equal to `val`.
    - **Step 4**: Return `i` as the result.

2. **Edge Cases**:
    - Empty array (`nums = []`): Return `0`.
    - All elements equal `val` (`nums = [3, 3, 3]`): Return `0` and leave `nums` unchanged.
    - No elements equal `val` (`nums = [1, 2, 3], val = 4`): Return the original length of `nums`.

---

## Solution Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
	let i = 0; // Pointer for valid elements
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] === val) {
			continue; // Skip elements equal to val
		}
		nums[i] = nums[j]; // Place valid element at index i
		i++;
	}
	return i; // Return the count of valid elements
};
```

---

### Test Cases

#### Example 1

```javascript
let nums = [3, 2, 2, 3];
let val = 3;
console.log(removeElement(nums, val)); // Output: 2
console.log(nums); // nums = [2, 2, _, _]
```

#### Example 2

```javascript
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
console.log(removeElement(nums, val)); // Output: 5
console.log(nums); // nums = [0, 1, 4, 0, 3, _, _, _]
```

#### Edge Case 1: Empty array

```javascript
let nums = [];
let val = 3;
console.log(removeElement(nums, val)); // Output: 0
console.log(nums); // nums = []
```

#### Edge Case 2: All elements equal `val`

```javascript
let nums = [3, 3, 3];
let val = 3;
console.log(removeElement(nums, val)); // Output: 0
console.log(nums); // nums = [_, _, _]
```

#### Edge Case 3: No elements equal `val`

```javascript
let nums = [1, 2, 3];
let val = 4;
console.log(removeElement(nums, val)); // Output: 3
console.log(nums); // nums = [1, 2, 3]
```

---

### Complexity Analysis

-   **Time Complexity**:  
    `O(n)` where `n` is the number of elements in `nums`. The loop runs once over all elements.
-   **Space Complexity**:  
    `O(1)` since the modification is done in-place without using extra memory.
