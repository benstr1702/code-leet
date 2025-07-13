# Guess Number Higher or Lower

### Difficulty: Easy

## Problem Overview

We are playing the **Guess Game**. The game is as follows:

You are given an integer `n` representing the upper bound of a range from `1` to `n`. A number is picked within this range (inclusive), and you need to **guess** the picked number.

You are provided with a pre-defined API function `guess(num)` that returns:

- `-1` if your guess is **higher** than the number I picked (`num > pick`)
- `1` if your guess is **lower** than the number I picked (`num < pick`)
- `0` if your guess is **equal** to the number I picked (`num == pick`)

Your goal is to **minimize the number of calls** to the `guess` API and return the number that was picked.

**Constraints**:

- `1 <= n <= 2^31 - 1`
- `1 <= pick <= n`

## Examples

### Example 1

**Input**: `n = 10, pick = 6`  
**Output**: `6`  
**Explanation**:

- The function `guess(5)` might return `1` (too low)
- Then `guess(7)` might return `-1` (too high)
- Then `guess(6)` returns `0` → correct guess.

### Example 2

**Input**: `n = 1, pick = 1`  
**Output**: `1`  
**Explanation**:

- Only one possible number. First guess is correct.

### Example 3

**Input**: `n = 2, pick = 1`  
**Output**: `1`  
**Explanation**:

- `guess(1)` returns `0` → correct on first try.

## Approach

1. **Binary Search**:

    - **Step 1**: Initialize two pointers: `low = 1`, `high = n`
    - **Step 2**: While `low <= high`, calculate the middle number using `Math.floor((low + high) / 2)`
    - **Step 3**: Call the `guess(mid)` API
    - **Step 4**:
        - If it returns `0`, return `mid` (correct guess)
        - If it returns `-1`, set `high = mid - 1` (guess was too high)
        - If it returns `1`, set `low = mid + 1` (guess was too low)
    - **Step 5**: Repeat until the correct number is found

2. **Edge Cases**:
    - `n = 1` → Only one possible guess
    - Very large `n` (up to 2^31 - 1) → Use integer-safe math (like `Math.floor`)
    - Assume `pick` is always valid within `1 <= pick <= n`

## Solution Code

```javascript
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return      -1 if num is higher than the picked number
 *              1 if num is lower than the picked number
 *              otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1;
    let high = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let current = guess(mid);
        if (current === 0) return mid;
        else if (current === -1) high = mid - 1;
        else low = mid + 1;
    }
};
