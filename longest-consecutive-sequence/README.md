# 128. Longest Consecutive Sequence

### Difficulty: Medium

## Problem Overview

Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.  
The algorithm must run in **O(n)** time.

### Constraints:

-   `0 <= nums.length <= 10^5`
-   `-10^9 <= nums[i] <= 10^9`

---

## Examples

### Example 1

**Input**: `nums = [100,4,200,1,3,2]`  
**Output**: `4`  
**Explanation**: The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore, its length is `4`.

---

### Example 2

**Input**: `nums = [0,3,7,2,5,8,4,6,0,1]`  
**Output**: `9`  
**Explanation**: The longest consecutive elements sequence is `[0, 1, 2, 3, 4, 5, 6, 7, 8]`. Its length is `9`.

---

## Approach

### **Algorithm**: Using a Set for Constant-Time Lookups

1. **Eliminate Duplicates**:

    - Use a `Set` to store all unique numbers from the input array. This allows O(1) lookup time when checking for consecutive numbers.

2. **Identify Start of a Sequence**:

    - For every number `num` in the set, check if `num - 1` is **not** in the set.  
      This ensures `num` is the start of a new sequence.

3. **Extend the Sequence**:

    - Starting from `num`, increment the number and check if it exists in the set.
    - Keep counting until the sequence breaks.

4. **Track the Longest Sequence**:
    - For each sequence, compare its length to a `maxLength` variable and update `maxLength` accordingly.

---

### **Edge Cases**:

1. **Empty Array**:

    - If the array is empty (`nums.length === 0`), return `0`.

2. **Single Element**:

    - If the array has only one number, the longest sequence length is `1`.

3. **Duplicate Numbers**:
    - The presence of duplicates doesn’t affect the algorithm since duplicates are removed by the set.

---

### **Solution Code**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
	if (nums.length === 0) return 0; // Edge case: empty array

	const numSet = new Set(nums); // Store unique numbers
	let maxLength = 0; // Initialize the maximum length

	for (const num of numSet) {
		// Check if it's the start of a sequence
		if (!numSet.has(num - 1)) {
			let currentNum = num;
			let currentLength = 1;

			// Expand the sequence
			while (numSet.has(currentNum + 1)) {
				currentNum++;
				currentLength++;
			}

			maxLength = Math.max(maxLength, currentLength); // Update max length
		}
	}

	return maxLength; // Return the longest sequence length
};

// Example usage
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9
```

---

## Complexity Analysis

1. **Time Complexity**:

    - Creating the set takes O(n).
    - The loop iterates through the set, and for each sequence, the `while` loop only runs for numbers that belong to the current sequence.
    - Each number is processed once, so the overall complexity is O(n).

2. **Space Complexity**:
    - The `Set` uses O(n) space to store unique numbers.

---

This algorithm efficiently finds the longest consecutive sequence in linear time using a `Set` for quick lookups.
