# 290 Word Pattern

### Difficulty: Easy

## Problem Overview

Given a pattern string `pattern` and a space-separated string `s`, determine if `s` follows the same pattern. Each character in `pattern` corresponds to a word in `s`. A pattern is followed if there is a one-to-one mapping between characters in `pattern` and words in `s`.

**Constraints**:

-   `pattern` and `s` contain only lowercase English letters.
-   The length of `pattern` is between 1 and 300.
-   The length of `s` is between 1 and 3000.

## Examples

### Example 1

**Input**: `"abba"`, `"dog cat cat dog"`  
**Output**: `true`  
**Explanation**:

-   `a` maps to `dog`
-   `b` maps to `cat`  
    The mapping is consistent throughout the pattern.

### Example 2

**Input**: `"abba"`, `"dog cat cat fish"`  
**Output**: `false`  
**Explanation**:  
The first `a` maps to `dog`, and the first `b` maps to `cat`, but the second `b` cannot map to `fish`.

### Example 3

**Input**: `"aaaa"`, `"dog cat cat dog"`  
**Output**: `false`  
**Explanation**:  
The repeated `a` requires a consistent mapping, but here it maps to different words (`dog` and `cat`).

## Approach

1. **Hash Map Mapping**:

    - **Step 1**: Split the string `s` into words using spaces and check if the length of `pattern` matches the number of words. If not, return `false`.
    - **Step 2**: Create two hash maps (`patternToString` and `stringToPattern`) to maintain the mapping of characters from `pattern` to words in `s` and vice versa.
    - **Step 3**: Iterate through the characters of `pattern` and words in `s` simultaneously:
        - If the character in `pattern` is already mapped, check if it maps consistently to the current word in `s`. Return `false` if the mapping is inconsistent.
        - Similarly, ensure that each word in `s` maps consistently to the corresponding character in `pattern`.
    - **Step 4**: Add the mappings for characters and words if they do not already exist in the respective hash maps.
    - **Step 5**: Return `true` if all mappings are consistent after iterating through the entire `pattern` and `s`.

2. **Edge Cases**:
    - The lengths of `pattern` and the split string `s` are different.
    - A character in `pattern` maps to more than one word in `s`, or vice versa.
    - Empty `pattern` or `s`.

## Solution Code

```javascript
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
	if (pattern.length !== s.split(" ").length) return false;
	s = s.trim().split(" ");
	const patternToString = new Map();
	const stringToPattern = new Map();
	for (let i = 0; i < pattern.length; i++) {
		let charPattern = pattern[i];
		let charS = s[i];
		if (
			patternToString.has(charPattern) &&
			patternToString.get(charPattern) !== charS
		)
			return false;
		if (
			stringToPattern.has(charS) &&
			stringToPattern.get(charS) !== charPattern
		)
			return false;
		patternToString.set(charPattern, charS);
		stringToPattern.set(charS, charPattern);
	}
	return true;
};

console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
```
