/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
	let write = 1,
		scan = 1,
		counter = 1;
	while (scan < nums.length) {
		if (nums[scan] === nums[scan - 1]) {
			counter++;
			if (counter <= 2) {
				nums[write] = nums[scan];
				write++;
			}
		} else {
			counter = 1;
			nums[write] = nums[scan];
			write++;
		}
		scan++;
	}
	return write;
};
