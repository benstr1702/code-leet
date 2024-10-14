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

// twoSum([2, 7, 11, 15], 9);
