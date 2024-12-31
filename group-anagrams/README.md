# 49. Group Anagram

### Difficulty: Easy

## Problem Overview

Given an array of strings strs, group the
anagrams
together. You can return the answer in any order.

**Constraints**:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

## Examples

### Example 1

**Input**: `strs = ["eat","tea","tan","ate","nat","bat"]`  
**Output**: `[["bat"],["nat","tan"],["ate","eat","tea"]]`  
**Explanation**: [Explain why the output is correct based on the input.]

### Example 2

**Input**: `[Another Input Example]`  
**Output**: `[Expected Output]`  
**Explanation**: There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

## Approach

1. **Hash Map Method**:

    - **Step 1**: sort every individual string in the array alphabetically.
    - **Step 2**: check every sorted string for hash map existence , if exists we push the current unsorted string to the value array.
    - **Step 3**: if doesnt exist , we add it to the map with the value being an empty array
    - **Step 4**: regardless of if the sorted string satisfies the condition, we push the unsorted string into the array.
    - **Step 5**: return an array made out of the values of the map using [...]

## Solution Code

```javascript
\*\*

-   @param {string[]} strs
-   @return {string[][]}
    \*/
    const groupAnagrams = (strs) => {
    const strMap = new Map();
    for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split("").sort().join("");
    if (!strMap.has(sortedString)) {
    strMap.set(sortedString, []);
    }
    strMap.get(sortedString).push(strs[i]);
    }

        return [...strMap.values()];

    };
```
