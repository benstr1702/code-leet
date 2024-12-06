/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
	let i = 0,
		j = 0;
	for (j; j < nums.length; j++) {
		if (nums[j] === val) {
			continue;
		} else {
			nums[i] = nums[j];
			i++;
		}
	}
	return i;
};

removeElement([3, 2, 2, 3, 4, 1, 2, 5, 6, 4, 3, 3, 1, 5], 3);
