/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
	const freqMap = new Map();
	for (const num of nums) {
		freqMap.set(num, freqMap.get(num) ? freqMap.get(num) + 1 : 1);
	}
	const sorted = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);
	return sorted.slice(0, k).map((item) => item[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 5, 5], 2));
