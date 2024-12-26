# 205 Isomorphic Strings

### Difficulty: Easy

## Problem Overview

Given two strings `s` and `t`, determine if they are isomorphic. Two strings are isomorphic if the characters in `s` can be replaced to get `t`, while maintaining the order of characters. No two characters may map to the same character, but a character may map to itself.

**Constraints**:

-   Both `s` and `t` have lengths between 1 and 5 \* 10⁴.
-   Characters in `s` and `t` are ASCII characters.

## Examples

### Example 1

**Input**: `"paper"`, `"title"`  
**Output**: `true`  
**Explanation**: By replacing each character in `s` with a corresponding character in `t`, we can transform "paper" into "title":

-   `p` -> `t`
-   `a` -> `i`
-   `p` -> `t`
-   `e` -> `l`
-   `r` -> `e`

### Example 2

**Input**: `"foo"`, `"bar"`  
**Output**: `false`  
**Explanation**: The mapping from `f` to `b` and `o` to `a` is valid, but the second `o` cannot map to `r` because this would violate the isomorphic constraint.

### Example 3

**Input**: `"egg"`, `"add"`  
**Output**: `true`  
**Explanation**: The characters `e` and `g` in "egg" map to `a` and `d` respectively, resulting in the transformation.

## Approach

1. **Hash Map Mapping**:

    - **Step 1**: Check if the lengths of the strings `s` and `t` are equal. If not, return `false`.
    - **Step 2**: Create two hash maps (`sToT` and `tToS`) to maintain the mapping of characters from `s` to `t` and `t` to `s`.
    - **Step 3**: Iterate over the characters of both strings:
        - If the character from `s` is already mapped in `sToT`, check if it maps consistently to the character in `t`.
        - Similarly, ensure the mapping from `t` to `s` in `tToS` is consistent.
        - If any mapping is inconsistent, return `false`.
    - **Step 4**: If no inconsistencies are found, add the mappings for characters from `s` to `t` and `t` to `s` in the respective hash maps.
    - **Step 5**: After completing the iteration, return `true` as the strings are isomorphic.

2. **Edge Cases**:
    - Strings of different lengths.
    - Repeated characters in `s` or `t` mapping inconsistently.
    - Empty strings, which should return `true`.

## Solution Code

```javascript
function isIsomorphic(s, t) {
	if (s.length !== t.length) return false;
	const sToT = new Map();
	const tToS = new Map();

	for (let i = 0; i < s.length; i++) {
		const charS = s[i];
		const charT = t[i];

		// Check for consistency in both mappings
		if (sToT.has(charS) && sToT.get(charS) !== charT) return false;
		if (tToS.has(charT) && tToS.get(charT) !== charS) return false;

		// Add mappings if they don't exist
		sToT.set(charS, charT);
		tToS.set(charT, charS);
	}

	return true;
}

console.log(isIsomorphic("paper", "title")); // Output: true
console.log(isIsomorphic("foo", "bar")); // Output: false
console.log(isIsomorphic("egg", "add")); // Output: true
```
