/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
	const max = Math.max(...candies);
	console.log("max:", max);

	const res = [];
	for (let i = 0; i < candies.length; i++) {
		candies[i] + extraCandies >= max ? res.push(true) : res.push(false);
	}
	return res;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
