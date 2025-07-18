# Successful Pairs of Spells and Potions

### Difficulty: Medium

## Problem Overview

You are given two positive integer arrays `spells` and `potions`, of length `n` and `m` respectively, where:

- `spells[i]` represents the strength of the *i-th* spell  
- `potions[j]` represents the strength of the *j-th* potion

You are also given an integer `success`.  
A spell and potion pair is considered **successful** if the product of their strengths is **at least** `success`.

Return an integer array `pairs` of length `n`, where `pairs[i]` is the **number of potions** that will form a successful pair with the `i-th` spell.

### Constraints:

- `n == spells.length`  
- `m == potions.length`  
- `1 <= n, m <= 10⁵`  
- `1 <= spells[i], potions[i] <= 10⁵`  
- `1 <= success <= 10¹⁰`

---

## Examples

### Example 1

**Input**:  
`spells = [5,1,3]`  
`potions = [1,2,3,4,5]`  
`success = 7`

**Output**:  
`[4,0,3]`

**Explanation**:
- 0th spell: `5 * [1,2,3,4,5] = [5,10,15,20,25]` → 4 pairs are successful  
- 1st spell: `1 * [1,2,3,4,5] = [1,2,3,4,5]` → 0 pairs are successful  
- 2nd spell: `3 * [1,2,3,4,5] = [3,6,9,12,15]` → 3 pairs are successful

---

### Example 2

**Input**:  
`spells = [3,1,2]`  
`potions = [8,5,8]`  
`success = 16`

**Output**:  
`[2,0,2]`

**Explanation**:
- 0th spell: `3 * [8,5,8] = [24,15,24]` → 2 pairs are successful  
- 1st spell: `1 * [8,5,8] = [8,5,8]` → 0 pairs are successful  
- 2nd spell: `2 * [8,5,8] = [16,10,16]` → 2 pairs are successful

---

## Approach

### 1. Binary Search on Sorted Potions

- **Step 1**: Sort the `potions` array in non-decreasing order.
- **Step 2**: For each `spell`, calculate the minimum potion strength required to reach success:  
  `minPotion = Math.ceil(success / spell)`
- **Step 3**: Use binary search to find the first index in `potions` where `potion >= minPotion`.
- **Step 4**: The number of successful pairs for this spell is `potions.length - index`.
- **Step 5**: Store this count in a result array and return it.

### 2. Edge Cases

- If `spell * max(potion)` is less than `success`, the count is 0 for that spell.
- If no potions meet the requirement, binary search will return `potions.length`, and the count will be 0.

---

## Solution Code

```javascript
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = (spells, potions, success) => {
	const sortedPotions = potions.sort((a, b) => a - b);
	const m = potions.length;
	const result = [];

	function binarySearch(spell) {
		let start = 0;
		let end = m - 1;
		while (start <= end) {
			let mid = Math.floor((start + end) / 2);
			if (sortedPotions[mid] * spell >= success) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		}
		return m - start;
	}

	for (const spell of spells) {
		result.push(binarySearch(spell));
	}

	return result;
};
