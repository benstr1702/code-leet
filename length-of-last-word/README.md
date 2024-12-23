# 58. Length of Last Word

### Difficulty: Easy

## Problem Overview

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
consisting of non-space characters only.

**Constraints**:

-   1 <= s.length <= 104
-   s consists of only English letters and spaces ' '.
-   There will be at least one word in s.

## Examples

### Example 1

**Input**: `s = "Hello World"`  
**Output**: `5`  
**Explanation**: The last word is "World" with length 5.

### Example 2

**Input**: `s = "   fly me   to   the moon  "`  
**Output**: `4`  
**Explanation**: The last word is "moon" with length 4.

## Approach

1. **Trimming and Splitting Approach**:

    - **Step 1**: Use the `trim()` method to remove leading and trailing spaces from the string.
    - **Step 2**: Use the `split(" ")` method to split the string into an array of words, separating by spaces.
    - **Step 3**: Retrieve the last element of the resulting array.
    - **Step 4**: Return the length of the last word.

2. **Edge Cases**:
    - Input with multiple trailing spaces: Ensure spaces are trimmed properly.
    - Input with only one word: The function should return the length of that word.

## Solution Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
	let newS = s.trim().split(" ");
	return newS[newS.length - 1].length;
};
```
