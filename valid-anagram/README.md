# 242 Valid Anagram

### Difficulty: Easy

## Problem Overview

Given two strings `s` and `t`, determine if `t` is an anagram of `s`. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Constraints**:

-   The strings `s` and `t` consist of lowercase English letters only.
-   The lengths of `s` and `t` are at most `5 * 10^4`.

## Examples

### Example 1

**Input**: `s = "anagram", t = "nagaram"`  
**Output**: `true`  
**Explanation**: By rearranging the letters of `"anagram"`, we can form `"nagaram"`.

### Example 2

**Input**: `s = "rat", t = "car"`  
**Output**: `false`  
**Explanation**: No matter how we rearrange the letters of `"rat"`, we cannot form `"car"`.

## Approach

1. **Hash Map Frequency Count**:

    - **Step 1**: Check if the lengths of `s` and `t` are different. If so, return `false` because they cannot be anagrams.
    - **Step 2**: Create two hash maps (`Map`) to count the frequency of each character in `s` and `t`.
    - **Step 3**: Iterate over the string `s` and populate the first hash map (`sMap`) with character counts.
    - **Step 4**: Similarly, iterate over the string `t` and populate the second hash map (`tMap`) with character counts.
    - **Step 5**: Compare the two hash maps. For each character in `sMap`, check if its frequency matches the corresponding frequency in `tMap`. If any character is missing or has a different count, return `false`.
    - **Step 6**: If all characters match, return `true`.

2. **Edge Cases**:
    - Strings of different lengths.
    - Strings that contain no repeating characters.
    - Empty strings.
    - Strings that are identical.

## Solution Code

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;
	const sMap = new Map();
	const tMap = new Map();

	for (const character of s) {
		sMap.set(character, (sMap.get(character) || 0) + 1);
	}
	for (const character of t) {
		tMap.set(character, (tMap.get(character) || 0) + 1);
	}

	for (const [char, count] of sMap) {
		if (tMap.get(char) !== count) {
			return false;
		}
	}
	return true;
};
```
