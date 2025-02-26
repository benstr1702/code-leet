# 274. H-Index

### Difficulty: Medium

## Problem Overview

Given an array of integers `citations`, where `citations[i]` represents the number of citations a researcher received for their `i`th paper, the task is to return the researcher's **h-index**.

The **h-index** is defined as the maximum value `h` such that the researcher has published at least `h` papers, each with at least `h` citations.

### **Constraints**:

-   `n == citations.length`
-   `1 <= n <= 5000`
-   `0 <= citations[i] <= 1000`

## Examples

### Example 1

**Input**: `citations = [3, 0, 6, 1, 5]`  
**Output**: `3`  
**Explanation**:

-   The researcher has 5 papers with citations `[3, 0, 6, 1, 5]`.
-   The h-index is `3` because there are at least 3 papers with 3 or more citations.

### Example 2

**Input**: `citations = [1, 3, 1]`  
**Output**: `1`  
**Explanation**:

-   The researcher has 3 papers with citations `[1, 3, 1]`.
-   The h-index is `1` because there is at least 1 paper with 1 or more citations.

## Approach

1. **Sorting Approach**:
    - **Step 1**: Sort the `citations` array in descending order.
    - **Step 2**: Traverse through the sorted array to find the highest value `h` such that the researcher has at least `h` papers with `h` or more citations.
    - **Step 3**: Return the value of `h` when the condition is met.
2. **Edge Cases**:
    - If the list of `citations` is empty, the h-index is `0`.
    - If all citation values are `0`, the h-index will be `0`.
    - If all papers have more than or equal to the number of papers, the h-index will be the total number of papers.

## Solution Code

```javascript
function hIndex(citations) {
	// Sort citations in descending order
	citations.sort((a, b) => b - a);

	// Iterate through the sorted list to find the h-index
	for (let i = 0; i < citations.length; i++) {
		if (citations[i] <= i) {
			return i;
		}
	}

	return citations.length;
}
```
