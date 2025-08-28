# 875. Koko Eating Bananas

### Difficulty: Medium

## Problem Overview

Koko loves to eat bananas. There are `n` piles of bananas, the `i`th pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during that hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer `k` such that she can eat all the bananas within `h` hours.

**Constraints**:

- 1 <= piles.length <= 10⁴
- piles.length <= h <= 10⁹
- 1 <= piles[i] <= 10⁹

## Examples

### Example 1

**Input**: `piles = [3,6,7,11], h = 8`  
**Output**: `4`  
**Explanation**:

- Koko can eat 4 bananas per hour:
  - Hour 1: eat 3 from pile 1 → finished
  - Hour 2: eat 4 from pile 2 → 2 left
  - Hour 3: eat 4 from pile 2 → finished
  - Hour 4: eat 4 from pile 3 → 3 left
  - Hour 5: eat 4 from pile 3 → finished
  - Hour 6: eat 4 from pile 4 → 7 left
  - Hour 7: eat 4 from pile 4 → 3 left
  - Hour 8: eat 3 from pile 4 → finished

### Example 2

**Input**: `piles = [30,11,23,4,20], h = 5`  
**Output**: `30`  
**Explanation**:

- Koko must eat the largest pile in one hour to finish all piles in 5 hours.  
- Any smaller speed would exceed `h` hours.

### Example 3

**Input**: `piles = [30,11,23,4,20], h = 6`  
**Output**: `23`  
**Explanation**:

- At speed 23, she can finish each pile in `ceil(pile / 23)` hours:
  - 30 → 2 hours
  - 11 → 1 hour
  - 23 → 1 hour
  - 4 → 1 hour
  - 20 → 1 hour  
- Total = 6 hours, exactly the limit.

## Approach

1. **Binary Search on Answer**:

    - **Step 1**: Initialize `left = 1` and `right = max(piles)`.  
    - **Step 2**: While `left < right`, do:  
        - Compute `mid = Math.floor((left + right) / 2)`  
        - Calculate total hours needed to finish all piles at speed `mid`:
          ```
          hours = sum(ceil(pile / mid) for pile in piles)
          ```  
    - **Step 3**: If `hours > h`, `mid` is too slow → set `left = mid + 1`.  
    - **Step 4**: Otherwise, `mid` works → set `right = mid`.  
    - **Step 5**: When loop ends, `left` (or `right`) is the minimum valid eating speed.

2. **Edge Cases**:
    - All piles have only one element → still works with the same binary search.  
    - `h` equals `piles.length` → speed must be at least `max(piles)`.

## Solution Code

```javascript
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1,
        right = Math.max(...piles);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let hours = 0;

        for (let pile of piles) {
            hours += Math.ceil(pile / mid);
        }

        if (hours > h) {
            // too slow, need higher speed
            left = mid + 1;
        } else {
            // mid works, maybe we can do better (smaller speed)
            right = mid;
        }
    }

    return left;
};
