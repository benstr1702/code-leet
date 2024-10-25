# 1.twoSum

### HashMap

Given an array of integers **nums** and an integer **target**, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

```javascript
function twoSum(nums, target) {
	const hashMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		let currentNum = nums[i];
		let neededNum = target - currentNum;
		console.log("hashMap: ", hashMap, " currentNum: ", currentNum);

		if (hashMap.has(neededNum)) {
			return [i, hashMap.get(neededNum)];
		}
		hashMap.set(currentNum, i);
	}
}
```
