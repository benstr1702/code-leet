/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
	if (nums.length === 0) return 0;
	const numSet = new Set(nums);
	let maxLength = 1;
	for (const num of numSet) {
		if (!numSet.has(num - 1)) {
			let currentNum = num;
			let currentLength = 1;

			// Keep checking for consecutive nums
			while (numSet.has(currentNum + 1)) {
				currentNum++;
				currentLength++;
			}

			maxLength = Math.max(maxLength, currentLength);
		}
	}
	return maxLength;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
