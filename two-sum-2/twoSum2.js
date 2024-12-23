/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
	let left = 0,
		right = numbers.length - 1;
	while (left < right) {
		let result = numbers[left] + numbers[right];
		if (result === target) {
			return [left + 1, right + 1];
		} else if (result > target) {
			right--;
		} else {
			left++;
		}
	}
};

console.log(twoSum([1, 3, 4, 5, 7, 10, 11], 9));
