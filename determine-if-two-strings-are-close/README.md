1657. Determine if Two Strings Are Close

### Difficulty: Medium

## Problem Overview

Two strings are considered close if you can attain one from the other using the following operations any number of times:

- **Operation 1**: Swap any two existing characters (e.g., `abcde` → `aecdb`).
- **Operation 2**: Transform every occurrence of one existing character into another existing character, and do the same with the other character (e.g., `aacabb` → `bbcbaa`, all a's turn into b's, and all b's into a's).

Given two strings, `word1` and `word2`, return `true` if `word1` and `word2` are close, and `false` otherwise.

**Constraints**:

- `1 <= word1.length, word2.length <= 10^5`
- `word1` and `word2` contain only lowercase English letters.

## Examples

### Example 1

**Input**: `word1 = "abc", word2 = "bca"`  
**Output**: `true`  
**Explanation**:

- Apply Operation 1: `"abc"` → `"acb"`  
- Apply Operation 1: `"acb"` → `"bca"`  
- Both operations are valid, so the strings are close.

### Example 2

**Input**: `word1 = "a", word2 = "aa"`  
**Output**: `false`  
**Explanation**:

- The lengths differ, and there is no way to transform `"a"` into `"aa"` using the allowed operations.

### Example 3

**Input**: `word1 = "cabbba", word2 = "abbccc"`  
**Output**: `true`  
**Explanation**:

- Apply Operation 1: `"cabbba"` → `"caabbb"`  
- Apply Operation 2: `"caabbb"` → `"baaccc"`  
- Apply Operation 2: `"baaccc"` → `"abbccc"`  
- Transformations are valid, so the strings are close.

## Approach

1. **Character Count Mapping**:

    - **Step 1**: If the lengths of the two strings are not equal, return `false`.
    - **Step 2**: Use two maps to count the frequency of each character in both `word1` and `word2`.
    - **Step 3**: Sort the keys of both maps and compare them. If the sets of unique characters don't match, return `false`.
    - **Step 4**: Sort the frequency values of both maps. If the sorted frequency lists don't match, return `false`.
    - **Step 5**: If both the sorted keys and frequency values match, return `true`.

2. **Edge Cases**:
    - If `word1` and `word2` differ in length, they can't be close.
    - If either string has a character that doesn't appear in the other, they can't be close.
    - Strings with same characters but different frequency patterns (e.g., `"aabb"` vs `"abbb"`) may not be close.

## Solution Code

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
    if (word1.length !== word2.length) return false;
    
    const word1Map = new Map();
    const word2Map = new Map();

    for (const character of word1) {
        word1Map.set(character, (word1Map.get(character) || 0) + 1);
    } 
    for (const character of word2) {
        word2Map.set(character, (word2Map.get(character) || 0) + 1);
    } 

    const keys1 = [...word1Map.keys()].sort();
    const keys2 = [...word2Map.keys()].sort();
    if (keys1.join('') !== keys2.join('')) return false;

    const values1 = [...word1Map.values()].sort((a, b) => a - b);
    const values2 = [...word2Map.values()].sort((a, b) => a - b);
    
    return values1.join('') === values2.join('');
};

