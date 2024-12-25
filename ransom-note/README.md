# 383. Ransom Note

### Difficulty: Easy

## Problem Overview

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

**Constraints**:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

## Examples

### Example 1

**Input**: `ransomNote = "a", magazine = "b"`  
**Output**: `false`  
**Explanation**: Cant make the letter 'a' from the letter 'b'

### Example 2

**Input**: `ransomNote = "aa", magazine = "ab"`  
**Output**: `false`  
**Explanation**: Only 1 'a' in the magazine , 2 'a's in the ransom note.

## Approach

1. **Hash Map Method**:

    - **Step 1**: Create a hash map.
    - **Step 2**: Loop through the magazine and set the characters as keys and the amount of times they appear in the string as value.
    - **Step 3**: Loop through the ransom note and check if the characters appear in the hash map , if they do subtract 1 from the value , if the value reaches 0 delete the pair.
    - **Step 4**: Return false if the character doesnt exist in the hashmap , or if the character appears more times than in the magazine, else return true.

## Solution Code

```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
	// create a new hash map and set the first character : 1 bc the first character is always gonna be new
	const hashMap = new Map();
	hashMap.set(magazine[0], 1);
	// iterate thru all of the characters in the magazine string and check if they exist in the map , if they do increment the current value by 1 , if they dont set the new value to 1
	for (let i = 1; i < magazine.length; i++) {
		if (hashMap.has(magazine[i])) {
			hashMap.set(magazine[i], hashMap.get(magazine[i]) + 1);
		} else {
			hashMap.set(magazine[i], 1);
		}
	}
	for (let j = 0; j < ransomNote.length; j++) {
		if (hashMap.has(ransomNote[j])) {
			if (hashMap.get(ransomNote[j]) === 1) {
				hashMap.delete(ransomNote[j]);
			} else hashMap.set(ransomNote[j], hashMap.get(ransomNote[j]) - 1);
		} else return false;
	}
	console.log(hashMap);
	return true;
};

canConstruct("note", "nta");
```
