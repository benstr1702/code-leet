# Counting Bits

### Difficulty: Easy

## Problem Overview

Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (`0 <= i <= n`), `ans[i]` is the number of 1's in the binary representation of `i`.

This is a classic bit manipulation problem where you're asked to return the count of `1`s in the binary format for every number from `0` to `n`.

**Constraints**:

- `0 <= n <= 10^5`

## Examples

### Example 1

**Input**: `n = 2`  
**Output**: `[0, 1, 1]`  
**Explanation**:

- 0 → `0` → 0 ones  
- 1 → `1` → 1 one  
- 2 → `10` → 1 one

### Example 2

**Input**: `n = 5`  
**Output**: `[0, 1, 1, 2, 1, 2]`  
**Explanation**:

- 0 → `0` → 0 ones  
- 1 → `1` → 1 one  
- 2 → `10` → 1 one  
- 3 → `11` → 2 ones  
- 4 → `100` → 1 one  
- 5 → `101` → 2 ones

## Approach

1. **Binary Conversion + Count**:

    - **Step 1**: Create a helper function `convertDecToBinary` that converts a decimal number to binary by dividing it repeatedly by 2 and tracking the remainders.
    - **Step 2**: Reverse the remainders array to get the correct binary representation.
    - **Step 3**: Create another helper function `countOnes` to count the number of `1`s in a binary string.
    - **Step 4**: For each number from `0` to `n`, convert the number to binary and count the `1`s.
    - **Step 5**: Store the count in the result array.

2. **Edge Cases**:
    - If `n = 0`, the result should just be `[0]`.

## Solution Code

```javascript
/**
 * @param {number} n
 * @return {number[]}
 */
const convertDecToBinary = (dec) => {
	if (dec === 0) return "0";
	if (dec === 1) return "1";
	let dividend = dec;
	let remainder;
	let res = [];
	while (dividend > 0) {
		remainder = dividend % 2;
		res.push(remainder);
		dividend = Math.floor(dividend / 2);
	}
	return res.reverse().join("");
};

const countOnes = (binary) => {
	let count = 0;
	for (let i = 0; i < binary.length; i++) {
		if (binary[i] === "1") count++;
	}
	return count;
};

const countBits = (n) => {
	const res = new Array(n + 1).fill(null);
	for (let i = 0; i < res.length; i++) {
		res[i] = countOnes(convertDecToBinary(i));
	}
	return res;
};

console.log(countBits(2)); // Output: [0, 1, 1]
