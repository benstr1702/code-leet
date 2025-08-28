/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
	let left = 1,
		right = Math.max(...piles);

	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		let currentSum = 0;
		for (let i = 0; i < piles.length; i++) {
			currentSum += Math.ceil(piles[i] / mid);
		}
		if (currentSum > h) {
			// not good , need to increase mid
			left = mid + 1;
		} else {
			// could be h , could still be a better option
			right = mid;
		}
	}
	return left;
};
