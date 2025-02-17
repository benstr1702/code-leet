/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
	// Sort array by ascending order
	nums.sort((a, b) => a - b);
	const result = [];
	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		// Set 2 pointers
		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const currentSum = nums[i] + nums[left] + nums[right];

			if (currentSum === 0) {
				result.push([nums[i], nums[left], nums[right]]);
				while (left < right && nums[right] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;
				left++;
				right--;
			} else if (currentSum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return result;
};
