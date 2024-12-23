# 121 Best Time to Buy and Sell Stock

### Difficulty: Easy

## Problem Overview

You are given an array `prices` where `prices[i]` is the price of a given stock on the \(i\)-th day. Your task is to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock. You are allowed to complete at most one transaction.

Return the maximum profit you can achieve from this transaction. If no profit is possible, return `0`.

**Constraints**:

- \(1 \leq \text{prices.length} \leq 10^5\)
- \(0 \leq \text{prices[i]} \leq 10^4\)

## Examples

### Example 1

**Input**: `[7, 1, 5, 3, 6, 4]`  
**Output**: `5`  
**Explanation**: Buy on day 2 (\(prices[1] = 1\)) and sell on day 5 (\(prices[4] = 6\)), profit = \(6 - 1 = 5\).

### Example 2

**Input**: `[7, 6, 4, 3, 1]`  
**Output**: `0`  
**Explanation**: No transaction is done, as it is impossible to make a profit.

### Example 3

**Input**: `[7, 6, 4, 3, 10]`  
**Output**: `7`  
**Explanation**: Buy on day 4 (\(prices[3] = 3\)) and sell on day 5 (\(prices[4] = 10\)), profit = \(10 - 3 = 7\).

## Approach

### Sliding Window (Two-Pointer) Approach

1. **Main Algorithm**:
    - **Step 1**: Initialize two pointers, `l` (left) and `r` (right). Set `l = 0` (buy day) and `r = 1` (sell day).
    - **Step 2**: Iterate through the array with `r` as the faster pointer:
        - If the price on the left day (`prices[l]`) is less than the price on the right day (`prices[r]`), calculate the profit \(profit = prices[r] - prices[l]\).
        - Update the maximum profit, `maxP`, if the current profit is greater.
        - If the price on the right day is less than or equal to the price on the left day, update the left pointer \(l = r\).
    - **Step 3**: Increment the right pointer and repeat until the end of the array.
    - **Step 4**: Return `maxP`, the maximum profit found.

2. **Edge Cases**:
    - If the array contains only one price, return `0` (no transaction possible).
    - If the prices are non-increasing, return `0` (no profit possible).

## Solution Code

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let l = 0, // Buy day
        r = 1, // Sell day
        maxP = 0; // Maximum profit

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            maxP = Math.max(maxP, profit); // Update max profit
        } else {
            l = r; // Update buy day
        }
        r++; // Move sell day forward
    }

    return maxP;
};

// Example Usage
let prices = [7, 6, 4, 3, 10];
console.log(maxProfit(prices)); // Output: 7

