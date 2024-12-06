# 14. Longest Common Prefix (easy)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

## Solution: Compare the first string in the array with the rest

### Early termination of loop:

1. Set the first string as a variable : `first = strs[0]`

2. Loop through the array starting from the string after 'first'

3.

```javascript
var longestCommonPrefix = function (strs) {
	let first = strs[0];

	for (let i = 0; i < first.length; i++) {
		// For each character position
		for (let str of strs) {
			// Check all strings at this position
			if (str[i] !== first[i]) {
				// As soon as we find a mismatch, return what we found so far
				return first.slice(0, i);
			}
		}
	}
	// If we get here, the entire first string is a prefix
	return first;
};
```
