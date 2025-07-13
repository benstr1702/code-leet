/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = (spells, potions, success) => {
	// sort the potions array
	const sortedPotions = potions.sort((a, b) => a - b);
	const m = potions.length;
	const result = [];

	function binarySearch(spell) {
		let start = 0;
		let end = m - 1;
		while (start <= end) {
			let mid = Math.floor((start + end) / 2);
			if (sortedPotions[mid] * spell >= success) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		}
		// Return number of successfull potions
		return m - start;
	}
	for (const spell of spells) {
		result.push(binarySearch(spell));
	}

	return result;
};
