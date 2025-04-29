# 345. Reverse Vowels of a String

### Difficulty: Easy

## Problem Overview

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
**Constraints**:

-   1 <= s.length <= 3 \* 105
-   s consist of printable ASCII characters.

## Examples

### Example 1

**Input**: `Input: s = "IceCreAm"
**Output**: Output: "AceCreIm"
**Explanation**:

-   The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

### Example 2

**Input**: Input: s = "leetcode"
**Output**: Output: "leotcede"

## Approach

1. **2 Pointers**:

2. **Edge Cases**:
   If the string is only 1 character long return the same string

## Solution Code

```javascript
/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
	// Helper function to check if a char is a vowel
	function isVowel(char) {
		const vowels = ["a", "e", "i", "o", "u"];
		return vowels.includes(char.toLowerCase());
	}

	if (s.length === 1) return s;
	let sArr = s.split(""); // Convert string to array

	let p1 = 0,
		p2 = sArr.length - 1;
	while (p1 < p2) {
		if (isVowel(sArr[p1]) && isVowel(sArr[p2])) {
			[sArr[p1], sArr[p2]] = [sArr[p2], sArr[p1]];

			p1++;
			p2--;
		} else if (!isVowel(sArr[p1]) && isVowel(sArr[p2])) p1++;
		else if (!isVowel(sArr[p2]) && isVowel(sArr[p1])) p2--;
		else {
			p1++;
			p2--;
		}
	}

	return sArr.join("");
};
```
