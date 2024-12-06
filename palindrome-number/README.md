# 9.Palindrome Number (easy)

### Given an integer x, return true if x is a

### palindrome, and false otherwise.

### Example 1:

### Input: x = 121

### Output: true

### Explanation: 121 reads as 121 from left to right and from right to left.

## Solution:

```javascript
function isPalindrome(x) {
	let xArr = String(x).split("").reverse(); // Convert number to string , then to array and reverse
	console.log("xArr: ", xArr);
	console.log(xArr.join("") == x);

	return xArr.join("") == x;
}
```
