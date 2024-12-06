# 13. Roman to Integer (easy)

### Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

### For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

## Constraints:

### 1 <= s.length <= 15

### **_s_** contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').

### It is guaranteed that s is a valid roman numeral in the range [1, 3999].

```javascript
const romanToInt = function (s) {
	const romanMap = new Map()
		.set("I", 1)
		.set("V", 5)
		.set("X", 10)
		.set("L", 50)
		.set("C", 100)
		.set("D", 500)
		.set("M", 1000);
	let result = 0;
	for (let index = 0; index < s.length; index++) {
		// console.log(romanMap.get(s[index]));
		let currentNumber = romanMap.get(s[index]);
		let nextNumber = romanMap.get(s[index + 1]);
		console.log("current: ", currentNumber, "\n", "next: ", nextNumber);

		if (currentNumber < nextNumber) {
			result = result + (nextNumber - currentNumber);
			index++;
		} else {
			result = result + currentNumber;
		}
		console.log("current sum: ", result);
	}
	return result;
};
```
