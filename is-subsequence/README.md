# 392 Is Subsequence

### Difficulty: Easy

## Problem Overview

Given two strings `s` and `t`, determine whether `s` is a subsequence of `t`. A subsequence is formed by deleting some (can be none) of the characters from the original string without disturbing the relative positions of the remaining characters.

The function should return `true` if `s` is a subsequence of `t`, otherwise `false`.

**Constraints**:

-   `0 <= s.length <= 100`
-   `0 <= t.length <= 10^4`
-   `s` and `t` consist only of lowercase English letters.

## Examples

### Example 1

**Input**: `s = "abc", t = "ahbgdc"`  
**Output**: `true`  
**Explanation**: All characters in `s` ("abc") appear in `t` ("ahbgdc") in the same order.

### Example 2

**Input**: `s = "axc", t = "ahbgdc"`  
**Output**: `false`  
**Explanation**: The character "x" in `s` does not appear in `t`.

### Example 3

**Input**: `s = "", t = "ahbgdc"`  
**Output**: `true`  
**Explanation**: An empty string is always a subsequence of any string.

### Example 4

**Input**: `s = "abc", t = ""`  
**Output**: `false`  
**Explanation**: A non-empty string cannot be a subsequence of an empty string.

## Approach

1. **Two Pointer Technique**:

    - **Step 1**: Initialize two pointers, `i` for `s` and `j` for `t`, both starting at index `0`.
    - **Step 2**: Iterate over the characters of `t` using `j`. For each character:
        - If `s[i]` matches `t[j]`, increment `i` to move to the next character in `s`.
        - Always increment `j` to move to the next character in `t`.
    - **Step 3**: If `i` equals `s.length` after the loop, all characters of `s` have been matched in `t`. Return `true`.
    - **Step 4**: If the loop completes and `i < s.length`, return `false`.

2. **Edge Cases**:
    - `s` is an empty string: Always return `true`.
    - `t` is an empty string: Return `false` unless `s` is also empty.
    - Characters in `s` are not in `t` or appear out of order.

## Solution Code

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
	let i = 0,
		j = 0;
	while (i < s.length && j < t.length) {
		if (s[i] === t[j]) {
			i++;
		}
		j++;
		console.log("i:", i, "j:", j); // Debugging output
	}
	return i === s.length;
};
```
