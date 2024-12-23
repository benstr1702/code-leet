/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
	let sortedNums = nums.sort(),
		i = 0,
		j = i + 1,
		k = nums.length - 1;
	for (i; i < nums.length; i++) {
		if (nums[j] + nums[k] === -1 * nums[i]) {
		}
	}
	console.log(sortedNums);
};
