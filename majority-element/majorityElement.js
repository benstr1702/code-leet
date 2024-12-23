/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
	const hashMap = new Map();
	const majority = Math.floor(nums.length / 2);
	console.log("majority:", majority);
	for (let number of nums) {
		hashMap.set(number, (hashMap.get(number) || 0) + 1);
		if (hashMap.get(number) > majority) {
			return number;
		}
	}
};

console.log(majorityElement([6, 5, 5]));
