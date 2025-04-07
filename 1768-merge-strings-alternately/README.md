# Merge Strings Alternately

### Difficulty: Easy

## Problem Overview

You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

**Constraints**:

-   1 <= word1.length, word2.length <= 100
-   word1 and word2 consist of lowercase English letters.

## Examples

### Example 1

**Input**:  
`word1 = "abc"`  
`word2 = "pqr"`  
**Output**: `"apbqcr"`  
**Explanation**:

-   The merged string will be merged as so:  
    word1: a b c  
    word2: p q r  
    merged: a p b q c r

### Example 2

**Input**:  
`word1 = "ab"`  
`word2 = "pqrs"`  
**Output**: `"apbqrs"`  
**Explanation**:

-   Notice that as word2 is longer, "rs" is appended to the end.  
    word1: a b  
    word2: p q r s  
    merged: a p b q r s

## Approach

1. **Iterate through both strings with two pointers**:

    - **Step 1**: Initialize two pointers `p1` and `p2` to 0. These will be used to track the current character of `word1` and `word2` respectively.
    - **Step 2**: Check if the lengths of the two words are unequal. If so, extract the leftover characters from the longer string and store them in a variable `leftOvers`.
    - **Step 3**: Slice both strings to the same length, keeping only the portion that will be interleaved.
    - **Step 4**: Use a loop to alternate characters from `word1` and `word2` using the two pointers and append them to the result string.
    - **Step 5**: After the loop ends, append the `leftOvers` (if any) to the end of the result string.

2. **Edge Cases**:
    - If one of the strings is empty, the result should just be the other string.
    - If both strings are the same length, there will be no leftovers, and the function simply alternates each character until the end.

## Solution Code

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
	// Check which string is longer and trim the rest to a new variable to append later
	let leftOvers = "";
	if (word1.length !== word2.length) {
		if (word1.length > word2.length) {
			leftOvers = word1.slice(word2.length);
			word1 = word1.slice(0, word2.length);
		} else {
			leftOvers = word2.slice(word1.length);
			word2 = word2.slice(0, word1.length);
		}
	}

	// Create 2 pointers and set them to the first character of each string
	let p1 = 0;
	let p2 = 0;
	let res = "";

	while (p1 < word1.length && p2 < word2.length) {
		res += word1[p1];
		p1++;
		res += word2[p2];
		p2++;
	}

	res += leftOvers;
	return res;
};

console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"
```
