/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
	let k = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[k - 1]) {
			continue;
		} else {
			nums[k] = nums[i];
			k++;
		}
	}
	return k;
};

//Test
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
