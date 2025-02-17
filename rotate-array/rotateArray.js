/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
	if (k === 0 || nums.length === 1) return nums;

	const newArr = [];
	for (let i = 0; i < nums.length; i++) {
		newArr[(i + k) % nums.length] = nums[i];
	}
	newArr.forEach((element, index) => {
		nums[index] = element;
	});
	return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 4));
