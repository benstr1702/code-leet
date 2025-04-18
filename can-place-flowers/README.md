# 605. Can Place Flowers

### Difficulty: Easy

## Problem Overview

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers **cannot** be planted in **adjacent** plots.

Given an integer array `flowerbed` containing 0's and 1's (where `0` means empty and `1` means planted), and an integer `n`, return `true` if `n` new flowers can be planted in the flowerbed **without violating** the no-adjacent-flowers rule, and `false` otherwise.

**Constraints**:

-   1 <= flowerbed.length <= 2 \* 10⁴
-   flowerbed[i] is either 0 or 1
-   There are no two adjacent flowers in flowerbed initially
-   0 <= n <= flowerbed.length

## Examples

### Example 1

**Input**: `flowerbed = [1,0,0,0,1], n = 1`  
**Output**: `true`  
**Explanation**:

-   We can plant 1 flower at index 2 without violating the no-adjacent rule, resulting in `[1,0,1,0,1]`.

### Example 2

**Input**: `flowerbed = [1,0,0,0,1], n = 2`  
**Output**: `false`  
**Explanation**:

-   We can only plant 1 flower at index 2. Planting another would violate the adjacency rule.

## Approach

1. **Greedy Iteration**:

    - **Step 1**: Iterate through each plot in the flowerbed array.
    - **Step 2**: At each index, check if the current plot is empty (`0`) and both its left and right neighbors are also empty (or undefined, in case of edges).
    - **Step 3**: If the condition is met, plant a flower at the current index by setting it to `1`.
    - **Step 4**: Decrease `n` by 1 for each flower planted.
    - **Step 5**: If `n` becomes 0 or less during iteration, return `true`. If the loop finishes and `n` is still greater than 0, return `false`.

2. **Edge Cases**:
    - If `n == 0`, we can always return `true` (no need to plant).
    - If the flowerbed is all 0's and long enough, multiple flowers may be planted.
    - Edge plots (first and last) should be handled properly—no left neighbor for the first and no right neighbor for the last.

## Solution Code

```javascript
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = (flowerbed, n) => {
	for (let i = 0; i < flowerbed.length; i++) {
		if (
			flowerbed[i] === 0 &&
			(flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined) &&
			(flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined)
		) {
			flowerbed[i] = 1;
			n--;
		}
	}

	return n <= 0;
};
```
